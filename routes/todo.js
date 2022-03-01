const router = require("express").Router();
const todo = require("../controllers/todo");

router.post("/", todo.createTodo);
router.get("/:id", todo.getAllTodo);
router.get("/:id", todo.getOneTodo);
router.put("/:id", todo.updateTodo);
router.delete("/:id", todo.deleteTodo);