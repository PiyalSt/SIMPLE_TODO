const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleComplete,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
// routes/taskRoutes.js
router.patch("/:id/toggle", toggleComplete); // PATCH ব্যবহার করলাম, পুরো field replace করছি না

module.exports = router;
