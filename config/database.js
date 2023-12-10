const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
      console.log("Error connecting to MongoDB");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = connectDB;
