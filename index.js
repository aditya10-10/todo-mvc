const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// import routes for todo apis

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//  connect DBd

const connectDB = require("./config/database");
connectDB();

// default routes

app.get("/", (req, res) => {
  res.send("<h1>This is home Page</h1>");
});
