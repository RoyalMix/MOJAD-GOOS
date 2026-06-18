import express from "express";

const router = express.Router();

router.get("/", async (_, res) => {
  res.json({ success: true });
});

router.post("/", async (req, res) => {
  res.json({
    success: true,
    message: "Job created"
  });
});

export default router;
