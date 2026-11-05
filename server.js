import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SK AI Studio Backend is Running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    project: "SK AI Studio"
  });
});

app.post("/api/generate-video", (req, res) => {
  res.status(503).json({
    error: "AI video provider is not connected yet."
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("SK AI Studio Backend Started!");
});
