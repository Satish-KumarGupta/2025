import express from "express";
import { createTodo, getAllTodo, updateTodo } from "../controllers/todo.js";
const router = express.Router();
router.route("/").post(createTodo).get(getAllTodo);
router.route("/:todoId").put(updateTodo);
export default router;
