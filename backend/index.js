const express = require("express");
const { connectDB } = require("./db");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.get("/health", (req, res) => res.json({ ok: true }));
  app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
});





