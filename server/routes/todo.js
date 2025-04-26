import express from "express";
import {
  createTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();
router
  .route("/")
  .post(isAuthenticated, createTodo)
  .get(isAuthenticated, getAllTodo);
router
  .route("/:todoId")
  .put(isAuthenticated, updateTodo)
  .delete(isAuthenticated, deleteTodo);

  
// router.route("/:todoId").delete(isAuthenticated, deleteTodo);
export default router;
