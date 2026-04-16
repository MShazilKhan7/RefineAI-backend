const express = require("express");
const resumeController = require("../controllers/resume.controller.js");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware.js");
const multer = require("multer");
const upload = multer(); // memory storage, keeps file in memory buffer

router.use(protect);

router.get("/:jobId", resumeController.getResumeByJobId);

router.post(
  "/upload/:jobId",
  upload.single("resume"),
  resumeController.uploadResume,
);
router.put(
  "/update/:jobId",
  upload.single("resume"),
  resumeController.updateResume,
);

module.exports = router;
