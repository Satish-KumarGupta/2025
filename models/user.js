import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: string, required: true },
  email: string,
  password: string,
});

export const User = mongoose.model("User", userSchema);
