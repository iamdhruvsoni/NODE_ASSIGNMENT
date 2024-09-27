const express = require("express");
const router = express.Router();

const {
  fetchTasks,
  saveOrUpdateTask,
  removeTask,
  fetchTaskById,
} = require("../Controllers/ApiController");

router.get("/tasks", fetchTasks);
router.post("/create", saveOrUpdateTask);
router.patch("/update/:id", saveOrUpdateTask);
router.delete("/remove/:id", removeTask);
router.get("/task/:id", fetchTaskById);

module.exports = router;
