import axios from "axios";

const AI_BASE_URL = process.env.AI_BASE_URL

// Suggestions API
export const generateSuggestionsAI = async (
  jobDescription,
  resumeText,
  acceptedSuggestions = [],
) => {
  console.log("sending accepted suggestions: ", acceptedSuggestions);
  try {
    const response = await axios.post(
      `${AI_BASE_URL}/suggestions`,
      {
        jobDescription,
        resumeText,
        acceptedSuggestions,
      },
      {
        headers: {
          "x-api-key": process.env.AI_SERVICE_SECRET,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      "AI Suggestions Error:",
      error?.response?.data || error.message,
    );
    throw new Error("Failed to generate suggestions from AI service");
  }
};

// 🔹 Interview Prep API
export const generateInterviewPrepAI = async (
  jobDescription,
  resumeText,
  additionalTopics = [],
) => {
  try {
    const response = await axios.post(
      `${AI_BASE_URL}/interview`,
      {
        jobDescription,
        resumeText,
        additionalTopics,
      },
      {
        headers: {
          "x-api-key": process.env.AI_SERVICE_SECRET,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(
      "AI Interview Prep Error:",
      error?.response?.data || error.message,
    );
    throw new Error("Failed to generate interview prep from AI service");
  }
};
