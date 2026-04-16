const express = require("express");
const jobController = require("../controllers/job.controller.js");
const router = express.Router();
const {protect} = require("../middlewares/auth.middleware.js")


router.use(protect)


router.post("/", jobController.createJob);
router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);
router.put("/:id", jobController.updateJob);
router.patch('/:id/status', jobController.changeJobStatus); // ← dedicated status route
router.delete("/:id", jobController.deleteJob);

module.exports = router;