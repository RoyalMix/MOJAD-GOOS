import express from "express";

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ message: "MOJAD GOOS API is running 🚀" });
});

app.listen(3001, () => {
  console.log("MOJAD API running on port 3001");
});
