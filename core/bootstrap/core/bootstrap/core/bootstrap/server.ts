import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    system: "MOJAD GOOS",
    mode: "backend-active"
  });
});

export default app;
