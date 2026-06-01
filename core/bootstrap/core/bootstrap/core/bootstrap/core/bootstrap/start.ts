import app from "./server";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 MOJAD GOOS Backend running on port ${PORT}`);
});
