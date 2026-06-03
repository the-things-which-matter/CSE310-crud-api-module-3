const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks");

//
// GET ALL TASKS
//
router.get("/", tasksController.getAll);

//
// GET SINGLE TASK
//
router.get("/:id", tasksController.getSingle);

//
// CREATE TASK
//
router.post(
  "/",

  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create task',
      required: true,
      schema: {
        title: 'New Task',
        description: 'Task description',
        status: 'In Progress',
        priority: 'High',
        dueDate: '2026-06-01',
        createdBy: 'Brima',
        completed: false
      }
    }
  */

  tasksController.createTask
);

//
// UPDATE TASK
//
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

//
// DELETE TASK
//
router.delete("/:id", tasksController.deleteTask);

module.exports = router;