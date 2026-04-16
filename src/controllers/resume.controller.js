const resumeService = require("../services/resume.service");

const getResumeByJobId = async (req, res) => {
  console.log("get resume");
  const userId = req.user.Id;
  const data = await resumeService.getResume(req.params.jobId, userId);
  res.json(data);
};

const uploadResume = async (req, res) => {
  console.log("request", req);
  const data = await resumeService.uploadResumePdf(req.params.jobId, req.file);
  res.json(data);
};

const updateResume = async (req, res) => {
  const data = await resumeService.updateResume(req.params.jobId, req.file);
  res.json(data);
};

module.exports = {
  uploadResume,
  updateResume,
  getResumeByJobId
};
