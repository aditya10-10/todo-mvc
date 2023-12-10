const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
