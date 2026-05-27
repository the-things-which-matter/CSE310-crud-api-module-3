const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasks");
const auth = require("../middleware/auth"); // JWT middleware

//
//  GET ALL TASKS (PUBLIC)
//
router.get("/", tasksController.getAll);

//
// GET SINGLE TASK (PUBLIC)
//
router.get("/:id", tasksController.getSingle);

//
//  CREATE TASK (PROTECTED and SWAGGER AUTH FIX)
//
router.post(
  "/",

  /*
    #swagger.security = [{
      "bearerAuth": []
    }]

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

  auth,
  tasksController.createTask
);

//
//  UPDATE TASK (PROTECTED and SWAGGER AUTH FIX)
//
router.put(
  "/:id",

  /*
    #swagger.security = [{
      "bearerAuth": []
    }]

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

  auth,
  tasksController.updateTask
);

//
// DELETE TASK (PROTECTED and SWAGGER AUTH FIX)
//
router.delete(
  "/:id",

  /*
    #swagger.security = [{
      "bearerAuth": []
    }]
  */

  auth,
  tasksController.deleteTask
);

module.exports = router;