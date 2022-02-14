const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Todo = require("./routes/todo"); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose
  .connect('mongodb://localhost/Todo-list', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/todo",Todo);

app.listen(3000, () => {console.log("server connected")})
