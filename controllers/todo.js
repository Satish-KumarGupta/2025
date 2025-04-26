import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    console.log("call")
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

export const updateTodo = async (req, res) => {
  const id = req.params.todoId;
  const { title } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true });

  return res.status(200).json({
    succes: true,
    result: todo,
    message: "Update success",
  });
};
export const deleteTodo = async (req, res) => {
  const id = req.params.todoId;
  await Todo.findByIdAndDelete(id);

  return res.status(200).json({
    succes: true,
    message: "delete success",
  });
};
