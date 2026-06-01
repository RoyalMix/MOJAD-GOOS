import express from "express";
import { PaymentService } from "../../../services/payment-service/payment.service";

const router = express.Router();
const payment = new PaymentService();

router.post("/send", (req, res) => {
  const { fromUserId, toUserId, amount } = req.body;

  const result = payment.sendPayment(fromUserId, toUserId, amount);

  res.json(result);
});

router.post("/escrow", (req, res) => {
  const { senderId, receiverId, amount, jobId } = req.body;

  const escrow = payment.createEscrow(senderId, receiverId, amount, jobId);

  res.json(escrow);
});

router.post("/release", (req, res) => {
  const { escrowId } = req.body;

  const result = payment.releaseEscrow(escrowId);

  res.json(result);
});

export default router;
