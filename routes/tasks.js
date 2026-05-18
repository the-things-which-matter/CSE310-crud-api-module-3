const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks");

// GET all
router.get("/", tasksController.getAll);

// GET one
router.get("/:id", tasksController.getSingle);

// POST
router.post("/", tasksController.createTask);

// PUT
router.put("/:id", tasksController.updateTask);

// DELETE
router.delete("/:id", tasksController.deleteTask);

module.exports = router;