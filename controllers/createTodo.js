//import schema
const Todo = require("../models/Todo");

// define routes
exports.createTodo = async (req, res) => {
  try {
    // extrat title and description from body
    const { title, description } = req.body;
    // create new todo
    const response = await Todo.create({ title, description });
    // send response with success status code
    res.status(200).json({
      success: true,
      data: response,
      message: "Todo created successfully",
    });
  } catch (err) {
    console.log("Error creating todo: ", err);
    console.error(err.message);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
