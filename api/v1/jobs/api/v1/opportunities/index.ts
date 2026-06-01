import { Router } from "express";

const router = Router();

router.get("/feed", (req, res) => {
  res.json({
    feed: [
      { type: "job", title: "Build AI system", reward: "π" },
      { type: "business", title: "Startup funding available", reward: "π" },
      { type: "agriculture", title: "Buy maize in bulk", reward: "π" }
    ]
  });
});

export default router;
