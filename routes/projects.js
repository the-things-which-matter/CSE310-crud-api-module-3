const express = require("express");
const router = express.Router();

const projectsController = require("../controllers/projects");

//
// GET ALL PROJECTS
//
router.get("/", projectsController.getAll);

//
// GET SINGLE PROJECT
//
router.get("/:id", projectsController.getSingle);

//
// CREATE PROJECT
//
router.post(
  "/",

  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create project',
      required: true,
      schema: {
        name: 'New Project',
        description: 'Project description',
        owner: 'Brima',
        status: 'Active',
        budget: 5000,
        startDate: '2026-06-01',
        endDate: '2026-07-01'
      }
    }
  */

  projectsController.createProject
);

//
// UPDATE PROJECT
//
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

//
// DELETE PROJECT
//
router.delete("/:id", projectsController.deleteProject);

module.exports = router;