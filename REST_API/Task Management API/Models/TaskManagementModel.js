const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/taskmanagement")
  .then(() => console.log("Connected to the Database!"));

const schema = mongoose.Schema;

const TaskSchema = new schema({
  name: {
    type: String,
  },
  details: {
    type: String,
  },
  assignee: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "in progress", "completed", "on hold"],
    default: "pending",
  },
  priorityLevel: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  deadline: {
    type: Date,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
