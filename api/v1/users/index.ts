import express from "express";

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.json({
    id: req.params.id
  });
});

export default router;
