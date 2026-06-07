const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const { connectDB } = require("./db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.get("/health", (req, res) => res.json({ ok: true }));
  app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
});





app.use(express.json());
app .use(cors());
app.use("/api/v1/", mainRouter);










