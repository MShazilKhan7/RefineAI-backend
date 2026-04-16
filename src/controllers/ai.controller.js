const aiService = require("../services/ai.service.js");

exports.getSuggestions = async (req, res) => {
  const data = await aiService.getSuggestions(req.params.jobId);
  res.json(data);
};

exports.generateSuggestions = async (req, res) => {
  const data = await aiService.generateSuggestions(req.params.jobId, req.user.id);
  res.json(data);
};

exports.acceptSuggestion = async (req, res) => {
  const data = await aiService.acceptSuggestion(req.params.suggestionId);
  res.json(data);
};

exports.generateInterviewQuestions = async (req, res) => {
  const { additionalTopics } = req.body;
  const data = await aiService.generateInterviewQuestions(
    req.params.jobId,
    req.user.id,
    additionalTopics,
  );
  res.json(data);
};

exports.getInterviewQuestions = async (req, res) => {
  const data = await aiService.getQuestions(req.params.jobId);
  res.json(data);
};
