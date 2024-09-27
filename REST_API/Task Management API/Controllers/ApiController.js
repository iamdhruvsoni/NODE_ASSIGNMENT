const Task = require("../Models/TaskManagementModel");

const fetchTasks = async (req, res) => {
  let tasks = await Task.find();
  res.json({
    tasks: tasks,
    msg: "Task list displayed successfully!",
  });
};

const saveOrUpdateTask = async (req, res) => {
  const { id, name, details, assignee, status, priority, deadline } = req.body;
  priority;

  let task;
  if (id) {
    task = await Task.findByIdAndUpdate(
      id,
      {
        name: name,
        details: details,
        assignee: assignee,
        status: status,
        priority: priority,
        deadline: deadline,
        updatedOn: Date.now(),
      },
      { new: true }
    );
  } else {
    task = new Task({
      name: name,
      details: details,
      assignee: assignee,
      status: status,
      priority: priority,
      deadline: deadline,
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });
    await task.save();
  }

  res.json({
    msg: id ? "Task updated successfully!" : "Task added successfully!",
    task: task,
  });
};

const removeTask = async (req, res) => {
  let id = req.params.id;
  let task = await Task.findByIdAndDelete(id);
  if (task) {
    res.json({ msg: "Task deleted successfully!" });
  } else {
    res.json({ msg: "Task not found!" });
  }
};

const fetchTaskById = async (req, res) => {
  let id = req.params.id;
  let task = await Task.findById(id);
  if (task) {
    res.json({ task: task, msg: "Task fetched successfully!" });
  } else {
    res.json({ msg: "Task not found!" });
  }
};

module.exports = { fetchTasks, saveOrUpdateTask, removeTask, fetchTaskById };
