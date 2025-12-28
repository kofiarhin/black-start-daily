const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});

app.get("/api/news", async (req, res, next) => {
  return res.json(newsData);
});

app.get("/api/health", (req, res) => {
  return res.json({ message: "hello world" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
