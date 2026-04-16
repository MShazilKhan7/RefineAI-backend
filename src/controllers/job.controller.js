// job.controller.js
const jobService = require('../services/job.service.js');

const VALID_STATUSES = ['applied', 'interviewing', 'offer', 'rejected'];

const validateJobBody = (body) => {
  const { companyName, jobTitle, status, jobDescription } = body;
  const errors = [];

  if (!companyName?.trim()) errors.push('companyName is required');
  if (!jobTitle?.trim()) errors.push('jobTitle is required');
  if (!jobDescription?.trim()) errors.push('jobDescription is required');
  if (!status) errors.push('status is required');
  else if (!VALID_STATUSES.includes(status))
    errors.push(`status must be one of: ${VALID_STATUSES.join(', ')}`);

  return errors;
};

exports.createJob = async (req, res) => {
  const errors = validateJobBody(req.body);
  if (errors.length) return res.status(400).json({ errors });

  const data = await jobService.createJob(req.user.id, req.body);
  res.status(201).json(data);
};

exports.getJobs = async (req, res) => {
  const data = await jobService.getJobs(req.user.id);
  res.json(data);
};

exports.getJobById = async (req, res) => {
  const data = await jobService.getJobById(req.params.id, req.user.id);
  if (!data) return res.status(404).json({ error: 'Job not found' });
  res.json(data);
};

exports.updateJob = async (req, res) => {
  const { status } = req.body;
  if (status && !VALID_STATUSES.includes(status))
    return res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(', ')}` });

  const data = await jobService.updateJob(req.params.id, req.user.id, req.body);
  if (!data) return res.status(404).json({ error: 'Job not found' });
  res.json(data);
};

exports.changeJobStatus = async (req, res) => {
  const { status } = req.body;

  if (!status) return res.status(400).json({ error: 'status is required' });
  if (!VALID_STATUSES.includes(status))
    return res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(', ')}` });

  const data = await jobService.changeJobStatus(req.params.id, req.user.id, status);
  if (!data) return res.status(404).json({ error: 'Job not found' });
  res.json(data);
};

exports.deleteJob = async (req, res) => {
  const deleted = await jobService.deleteJob(req.params.id, req.user.id);
  if (!deleted) return res.status(404).json({ error: 'Job not found' });
  res.json({ message: 'Job deleted successfully' });
};