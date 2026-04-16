const prisma = require('../utils/prisma');
const { callInterviewAI } = require("../utils/ai.js");

exports.generatePrep = async (jobId) => {
  const job = await prisma.jobApplication.findUnique({
    where: { id: jobId },
    include: { resume: true },
  });

  const topics = await callInterviewAI(job);

  for (const topic of topics) {
    const prep = await prisma.interviewPrep.create({
      data: {
        jobApplicationId: jobId,
        topic: topic.name,
      },
    });

    await prisma.interviewQuestion.createMany({
      data: topic.questions.map((q) => ({
        interviewPrepId: prep.id,
        question: q.question,
        answer: q.answer,
        keyPoints: q.keyPoints,
      })),
    });
  }

  return "Interview Prep Generated";
};

exports.addTopic = async (jobId, topic) => {
  // Same AI call but for one topic
};