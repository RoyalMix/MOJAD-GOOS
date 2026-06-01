import express from "express";
import { login } from "./auth.controller";

const router = express.Router();

router.post("/login", login);

export default router;
