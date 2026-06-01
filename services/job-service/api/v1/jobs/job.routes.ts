import express from "express";
import { JobService } from "../../../services/job-service/job.service";

const router = express.Router();
const jobService = new JobService();

router.post("/create", (req, res) => {
  const { companyId, title, description } = req.body;

  const job = jobService.createJob(companyId, title, description);

  res.json(job);
});

router.post("/apply", (req, res) => {
  const { userId, jobId } = req.body;

  const application = jobService.applyToJob(userId, jobId);

  res.json(application);
});

router.get("/list", (req, res) => {
  res.json(jobService.listJobs());
});

export default router;
