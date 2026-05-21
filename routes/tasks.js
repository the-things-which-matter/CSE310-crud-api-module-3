const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks");

// GET all tasks
router.get("/", tasksController.getAll);

// GET single task by ID
router.get("/:id", tasksController.getSingle);

// POST create task
router.post("/", tasksController.createTask);

// PUT update task
router.put(
  "/:id",

  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Update task',
      required: true,
      schema: {
        title: 'Updated Task',
        description: 'Updated description',
        status: 'Completed',
        priority: 'High',
        dueDate: '2026-06-01',
        createdBy: 'Brima',
        completed: true
      }
    }
  */

  tasksController.updateTask
);

// DELETE task
router.delete("/:id", tasksController.deleteTask);

module.exports = router;