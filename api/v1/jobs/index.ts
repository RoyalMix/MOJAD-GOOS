import { Router } from "express";

const router = Router();

router.get("/list", (req, res) => {
  res.json({
    jobs: [
      {
        id: "job-1",
        title: "AI Developer",
        location: "Remote",
        salary: "π 500 - 2000",
        trustRequired: 60
      }
    ]
  });
});

export default router;
