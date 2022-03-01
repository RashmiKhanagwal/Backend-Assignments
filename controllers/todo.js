const Todo = require("../models/todo");

//CREATE TODO
module.exports.createTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
      const savedTodo = await newTodo.save();
      res.status(200).json(savedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
};

// GET all todos
module.exports.getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find(req.params.id);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET one TODO 
module.exports.getOneTodo = async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
};
  
//UPDATE todo
module.exports.updateTodo = async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (todo.username === req.body.username) {
        try {
          const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedTodo);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your todo!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
};
  
//DELETE todo
module.exports.deleteTodo = async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (todo.username === req.body.username) {
        try {
          await todo.delete();
          res.status(200).json("todo has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your todo!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
};