import { Router } from "express";

const router = Router();

router.get("/balance", (req, res) => {
  res.json({
    currency: "π",
    balance: 0,
    status: "Pi Wallet connected (mock)",
    message: "Ready for Pi Network integration"
  });
});

export default router;
