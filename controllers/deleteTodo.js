const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      data: null,
      Message: "Successfully deleted todo by id",
    });
  } catch (error) {
    console.error(error.message);
    res.status(200).json({
      success: false,
      data: "Error fetching todo by id",
      error: error.message,
    });
  }
};
