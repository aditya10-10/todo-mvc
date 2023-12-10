const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      Message: "Successfully fetched all todos",
    });
  } catch (err) {
    console.error(err.message);
    res.status(200).json({
      success: false,
      data: "Error fetching todos",
      error: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findById({ _id: id });

    res.status(200).json({
      success: true,
      data: todo,
      Message: "Successfully fetched todo by id",
    });
  } catch (err) {
    console.error(err.message);
    res.status(200).json({
      success: false,
      data: "Error fetching todo by id",
      error: err.message,
    });
  }
};
