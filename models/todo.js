import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  title: { type: string, required: true },
  description: string,
});

export const Todo = mongoose.model("Todo", toDoSchema);
