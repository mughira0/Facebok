import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`server is  running on ${port}`);
});
