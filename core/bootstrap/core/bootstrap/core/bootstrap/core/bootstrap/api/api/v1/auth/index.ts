import { Router } from "express";

const router = Router();

// Mock login (STEP 2 simple foundation)
router.post("/login", (req, res) => {
  const { email } = req.body;

  res.json({
    success: true,
    message: "MOJAD login successful",
    user: {
      id: "mojad-user-001",
      email,
      trustScore: 75,
      verified: false
    }
  });
});

export default router;
