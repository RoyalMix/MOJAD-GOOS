import express from "express";

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.json({
    userId: req.params.id
  });
});

export default router;
