import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connection.js";
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || "3000";

app.use("/register", userRouter);

app.listen(PORT, () => {
  console.log(`server running on port no ${PORT}`);
});
