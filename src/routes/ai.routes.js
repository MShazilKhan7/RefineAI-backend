const express = require("express");
const aiController = require("../controllers/ai.controller.js");
const router = express.Router();
const {protect} = require("../middlewares/auth.middleware.js")


router.use(protect)

router.get("/suggestions/:jobId", aiController.getSuggestions);
router.post("/generate/suggestions/:jobId", aiController.generateSuggestions);
router.post("/accept/:suggestionId", aiController.acceptSuggestion);
router.get("/interview/:jobId", aiController.getInterviewQuestions);
router.post("/generate/questions/:jobId", aiController.generateInterviewQuestions);


module.exports = router;