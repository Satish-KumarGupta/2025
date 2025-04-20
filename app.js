import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connection.js";
import userRouter from "./routes/user.js";
const app = express();

dotenv.config();
connectDB();
const PORT = "3000";

app.use("/register", userRouter);

app.listen(PORT, () => {
  console.log(`server running on port no ${PORT}`);
});
