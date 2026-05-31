import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "MOJAD GOOS API running 🚀" });
});

app.listen(3001, () => {
  console.log("MOJAD Backend running on port 3001");
});
