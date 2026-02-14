require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

