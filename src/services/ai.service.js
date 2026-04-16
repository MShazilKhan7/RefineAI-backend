const prisma = require("../utils/prisma");
const crypto = require("crypto");
const {
  generateSuggestionsAI,
  generateInterviewPrepAI,
} = require("../utils/ai.js");
const { redis } = require("../utils/redis.js");
const rateLimiter = require("../utils/rateLimiter.js");

const getSuggestions = async (jobId) => {
  console.log("jobId", jobId);
  if (!jobId) {
    throw new Error("Job ID is required");
  }
  const cacheKey = `job:${jobId}:suggestions`;

  try {
    const cached = await redis.get(cacheKey);

    if (cached) {
      console.log("CACHE HIT");
      return cached; // Upstash already returns parsed JSON
    }
  } catch (err) {
    console.log("Redis GET error:", err.message);
  }
  console.log("CACHE MISS → Fetching from DB");

  const suggestions = await prisma.aISuggestion.findMany({
    where: { jobApplicationId: jobId },
  });

  try {
    if (suggestions && suggestions.length > 0) {
      await redis.set(cacheKey, suggestions);
      console.log("Cached forever (until invalidated)");
    }
  } catch (error) {
    console.log("Redis SET error:", error.message);
  }
  return suggestions;
};

const generateSuggestions = async (jobId, userId) => {
  const cacheKey = `job:${jobId}:suggestions`;
  const rateKey = `rate:suggestions:${userId}`;

  const allowed = await rateLimiter(rateKey, 2, 60); // 5 req / min

  if (!allowed) {
    throw new Error("Too many requests. Please try again later.");
  }

  const job = await prisma.jobApplication.findUnique({
    where: { id: jobId },
    include: { resume: true },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  if (!job.resume || !job.resume.parsedText) {
    throw new Error("Resume not uploaded or parsed");
  }

  const acceptedSuggestions = await prisma.aISuggestion.findMany({
    where: { jobApplicationId: jobId, status: "accepted" },
    select: {
      originalText: true,
      suggestedText: true,
      type: true,
    },
  });

  console.log("acceptedSuggestions", acceptedSuggestions);
  const aiResponse = await generateSuggestionsAI(
    job.jobDescription,
    job.resume.parsedText,
    acceptedSuggestions,
  );

  if (!aiResponse || !Array.isArray(aiResponse.suggestions)) {
    throw new Error("Invalid AI response format");
  }

  await prisma.aISuggestion.deleteMany({
    where: { jobApplicationId: jobId, status: "pending" },
  });

  console.log("AI Respone ", aiResponse);

  const suggestionsData = aiResponse.suggestions.map((s) => ({
    jobApplicationId: jobId,
    originalText: s.original,
    suggestedText: s.suggested,
    explanation: s.explanation,
    type: s.type,
  }));

  console.log("DATA", suggestionsData);
  await prisma.aISuggestion.createMany({
    data: suggestionsData,
  });

  // deleting after it has been saved to database
  try {
    await redis.del(cacheKey);
    console.log("Cache cleared:", cacheKey);
  } catch (err) {
    console.log("Cache delete failed (safe to ignore):", err.message);
  }

  return prisma.aISuggestion.findMany({
    where: { jobApplicationId: jobId },
  });
};

const acceptSuggestion = async (suggestionId) => {
  const suggestion = prisma.aISuggestion.update({
    where: { id: suggestionId },
    data: { status: "accepted" },
  });
  return suggestion;
};

const getQuestions = async (jobId) => {
  if (!jobId) {
    throw new Error("Job ID is required");
  }

  const cacheKey = `job:${jobId}:interview_questions`;

  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      console.log("CACHE HIT");
      return cached; // Upstash already returns parsed JSON
    }
  } catch (err) {
    console.log("Redis GET error:", err.message);
  }
  console.log("CACHE MISS → Fetching from DB");

  // 1. Get latest interview prep for this job
  const interviewPrep = await prisma.interviewPrep.findMany({
    where: { jobApplicationId: jobId },
  });

  if (!interviewPrep) {
    return {
      interviewPrepId: null,
      topics: [],
    };
  }

  const questions = await prisma.interviewQuestion.findMany({
    where: { interviewPrepId: interviewPrep.id },
    orderBy: { createdAt: "asc" },
  });

  // 3. Group by topic (VERY IMPORTANT for your UI)
  const groupedTopics = Object.values(
    questions.reduce((acc, q) => {
      if (!acc[q.topic]) {
        acc[q.topic] = {
          topic: q.topic,
          questions: [],
        };
      }

      acc[q.topic].questions.push({
        id: q.id,
        question: q.question,
        answer: q.answer,
        keyPoints: q.keyPoints,
      });

      return acc;
    }, {}),
  );

  return {
    interviewPrepId: interviewPrep.id,
    topics: groupedTopics,
  };
};

const generateInterviewQuestions = async (
  jobId,
  userId,
  additionalTopics = [],
) => {
  if (!jobId) throw new Error("Job ID is required");

  const cacheKey = `job:${jobId}:interview_questions`;
  const ratekey = `rate:interview:${userId}`;

  // 2 req per minute.
  const allowed = await rateLimiter(ratekey, 2, 60); // stricter

  if (!allowed) {
    throw new Error("Too Many requests, Try again later");
  }

  // 1. Fetch job + resume
  const job = await prisma.jobApplication.findUnique({
    where: { id: jobId },
    include: { resume: true },
  });

  if (!job) throw new Error("Job not found");
  if (!job.resume?.parsedText) throw new Error("Resume not uploaded or parsed");

  // 2. Get existing prep (IMPORTANT CHANGE)
  let interviewPrep = await prisma.interviewPrep.findFirst({
    where: { jobApplicationId: jobId },
    orderBy: { createdAt: "desc" },
    include: { questions: true },
  });

  let previousQuestions = [];
  let coveredTopics = [];

  if (interviewPrep && interviewPrep.questions.length > 0) {
    const limited = interviewPrep.questions.slice(0, 20);

    previousQuestions = limited.map((q) => q.question);
    coveredTopics = [...new Set(limited.map((q) => q.topic))];
  }

  console.log(
    "Data sent to AI",
    job.jobDescription,
    job.resume.parsedText,
    additionalTopics,
    previousQuestions,
    coveredTopics,
  );
  // 3. Call AI with memory
  const aiResponse = await generateInterviewPrepAI(
    job.jobDescription,
    job.resume.parsedText,
    additionalTopics,
    previousQuestions,
    coveredTopics,
  );

  if (!aiResponse || !Array.isArray(aiResponse.topics)) {
    throw new Error("Invalid AI response format");
  }

  // 4. Transaction
  const result = await prisma.$transaction(async (tx) => {
    // if first time...
    if (!interviewPrep) {
      interviewPrep = await tx.interviewPrep.create({
        data: { jobApplicationId: jobId },
      });
    }

    // 5. Flatten new questions
    const questionsData = aiResponse.topics.flatMap((topicObj) =>
      topicObj.questions.map((q) => ({
        userId,
        interviewPrepId: interviewPrep.id,
        topic: topicObj.topic,
        question: q.question,
        answer: q.answer,
        keyPoints: q.keyPoints,
      })),
    );

    // 6. Insert (APPEND, not replace)
    await tx.interviewQuestion.createMany({
      data: questionsData,
    });

    return {
      interviewPrepId: interviewPrep.id,
      topics: aiResponse.topics,
    };
  });

  try {
    await redis.del(cacheKey);
    console.log("Cache cleared:", cacheKey);
  } catch (err) {
    console.log("Cache delete failed (safe to ignore):", err.message);
  }
  return result;
};

module.exports = {
  generateSuggestions,
  acceptSuggestion,
  getSuggestions,
  generateInterviewQuestions,
  getQuestions,
};
