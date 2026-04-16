const interviewService = require("../services/interview.service.js");

exports.generatePrep = async (req, res) => {
  const data = await interviewService.generatePrep(req.params.jobId);
  res.json(data);
};

exports.addTopic = async (req, res) => {
  const data = await interviewService.addTopic(
    req.params.jobId,
    req.body.topic
  );
  res.json(data);
};