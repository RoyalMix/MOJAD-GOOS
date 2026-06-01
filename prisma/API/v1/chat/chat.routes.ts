import express from "express";
import { ChatService } from "../../../core/communication-engine/chat.service";

const router = express.Router();
const chat = new ChatService();

router.post("/send", (req, res) => {
  const { senderId, receiverId, message } = req.body;

  const result = chat.sendMessage(senderId, receiverId, message);

  res.json(result);
});

export default router;
