import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const todos = await new Todo({ title, description });
    await todos.save();
    return res.status(201).json({
      success: true,
      message: "create todo successfull.",
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodo = async (req, res) => {
  const totos = await Todo.find();
  return res.status(200).json({
    succes: true,
    result: totos.length === 0 ? [] : totos,
  });
};
