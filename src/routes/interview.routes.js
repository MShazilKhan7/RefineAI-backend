const express = require("express");
const interviewController = require("../controllers/interview.controller.js");
const router = express.Router();
const {protect} = require("../middlewares/auth.middleware.js")


router.use(protect)


router.post("/generate/:jobId", interviewController.generatePrep);
router.post("/add-topic/:jobId", interviewController.addTopic);

module.exports = router;