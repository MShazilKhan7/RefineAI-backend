// job.service.js
const prisma = require('../utils/prisma');

const jobSelect = {
  id: true,
  companyName: true,
  jobTitle: true,
  status: true,
  jobUrl: true,
  jobDescription: true,
  notes: true,
  createdAt: true,
  updatedAt: true,
};

exports.createJob = async (userId, body) => {
  const { companyName, jobTitle, status, jobUrl, jobDescription, notes } = body;

  return prisma.jobApplication.create({
    data: { userId, companyName, jobTitle, status, jobUrl, jobDescription, notes },
    select: jobSelect,
  });
};

exports.getJobs = async (userId) => {
  return prisma.jobApplication.findMany({
    where: { userId },
    select: jobSelect,
    orderBy: { createdAt: 'desc' },
  });
};

exports.getJobById = async (id, userId) => {
  return prisma.jobApplication.findFirst({
    where: { id, userId },
    select: jobSelect,
  });
};

exports.updateJob = async (id, userId, body) => {
  const { companyName, jobTitle, status, jobUrl, jobDescription, notes } = body;

  const exists = await prisma.jobApplication.findFirst({ where: { id, userId } });
  if (!exists) return null;

  return prisma.jobApplication.update({
    where: { id },
    data: { companyName, jobTitle, status, jobUrl, jobDescription, notes },
    select: jobSelect,
  });
};

exports.changeJobStatus = async (id, userId, status) => {
  const exists = await prisma.jobApplication.findFirst({ where: { id, userId } });
  if (!exists) return null;

  return prisma.jobApplication.update({
    where: { id },
    data: { status },
    select: jobSelect,
  });
};

exports.deleteJob = async (id, userId) => {
  const exists = await prisma.jobApplication.findFirst({ where: { id, userId } });
  if (!exists) return null;

  await prisma.jobApplication.delete({ where: { id } });
  return true;
};