require("dotenv").config();

const express = require("express");
const ConnectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

// connection mongodb
ConnectDB();

// routes
app.use("/api/todo/v1/users", userRoutes);
app.use("/api/todo/v1/task", taskRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
