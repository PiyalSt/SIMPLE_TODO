const Task = require("../models/taskSchema");

const createTask = async (req, res) => {
  try {
    const { task, done } = req.body;

    const newtask = await Task.create({
      task,
      done,
    });

    res.status(201).json({ message: "Task create success!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task delete successfully!",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controllers/taskController.js
const toggleComplete = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed;
    await task.save();

    res.status(200).json({
      message: "Task completed",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleComplete,
};
