import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connection.js";
const app = express();
dotenv.config();
connectDB();
const PORT = "3000";
app.listen(PORT, () => {
  console.log(`server running on port no ${PORT}`);
});
