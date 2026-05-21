const express = require("express");
const router = express.Router();

const projectsController = require("../controllers/projects");

// GET all projects
router.get("/", projectsController.getAll);

// GET single project by ID
router.get("/:id", projectsController.getSingle);

// POST create project
router.post("/", projectsController.createProject);

// PUT update project
router.put(
  "/:id",

  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Update project',
      required: true,
      schema: {
        name: 'Updated Project',
        description: 'Updated project description',
        owner: 'Brima',
        status: 'Active',
        budget: 5000,
        startDate: '2026-06-01',
        endDate: '2026-07-01'
      }
    }
  */

  projectsController.updateProject
);

// DELETE project
router.delete("/:id", projectsController.deleteProject);

module.exports = router;