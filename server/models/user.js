import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);
