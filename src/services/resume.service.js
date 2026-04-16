const prisma = require("../utils/prisma");
const { parsePDF } = require("../utils/pdfParser.js");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinaryUpload.js");

exports.getResume = async (jobId, userId) => {
  return prisma.resume.findFirst({
    where: {
      jobApplicationId: jobId,
      jobApplication: {
        userId,
      },
    },
  });
};

exports.uploadResumePdf = async (jobId, file) => {
  // 1. Upload to Cloudinary
  const uploaded = await uploadToCloudinary(
    file.buffer,
    `${Date.now()}-${file.originalname}`,
  );

  console.log("uploading.....", uploaded);

  // 2. Parse PDF
  const parsedText = await parsePDF(file);

  // 3. deleting the pending suggestions
  await prisma.aISuggestion.deleteMany({
    where: { jobApplicationId: jobId, status: "pending" },
  });

  // 3. Save in DB
  return prisma.resume.upsert({
    where: { jobApplicationId: jobId },
    update: {
      fileUrl: uploaded.secure_url, // 🔥 Cloudinary URL
      parsedText,
      version: { increment: 1 },
    },
    create: {
      jobApplicationId: jobId,
      fileUrl: uploaded.secure_url,
      parsedText,
    },
  });
};

exports.updateResumePdf = async (jobId, file) => {
  // checking existing resume
  const existingResume = await prisma.resume.findUnique({
    where: { jobApplicationId: jobId },
  });

  // 2. If exists → delete old file from Cloudinary + DB record
  if (existingResume) {
    try {
      await deleteFromCloudinary(existingResume.fileUrl);
    } catch (err) {
      console.warn("Failed to delete old file from Cloudinary", err);
    }
    await prisma.resume.delete({
      where: { jobApplicationId: jobId },
    });
  }

  // 3. Upload new file to Cloudinary
  const uploaded = await uploadToCloudinary(
    file.buffer,
    `${Date.now()}-${file.originalname}`,
  );

  // 4. Parse PDF
  const parsedText = await parsePDF(file);

  // 5. Create new resume record
  const newResume = await prisma.resume.create({
    data: {
      jobApplicationId: jobId,
      fileUrl: uploaded.secure_url,
      parsedText,
      version: 1, // reset version since it's fresh
    },
  });

  return newResume;
};
