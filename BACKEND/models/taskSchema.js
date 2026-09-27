const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Task is required"],
    },
    completed: {
      type: Boolean,
      default: false,
      // required: [true, "Done required"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Task", taskSchema);
