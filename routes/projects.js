const express = require("express");
const router = express.Router();

const projectsController = require("../controllers/projects");
const auth = require("../middleware/auth"); // JWT middleware

//
//  GET ALL PROJECTS (PUBLIC)
//
router.get("/", projectsController.getAll);

//
// GET SINGLE PROJECT (PUBLIC)
//
router.get("/:id", projectsController.getSingle);

//
//  CREATE PROJECT (PROTECTED  and  SWAGGER JWT)
//
router.post(
  "/",

  /*
    #swagger.security = [{
      "bearerAuth": []
    }]

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

  auth,
  projectsController.createProject
);

//
//  UPDATE PROJECT (PROTECTED and  SWAGGER JWT)
//
router.put(
  "/:id",

  /*
    #swagger.security = [{
      "bearerAuth": []
    }]

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

  auth,
  projectsController.updateProject
);

//
// DELETE PROJECT (PROTECTED and  SWAGGER JWT)
//
router.delete(
  "/:id",

  /*
    #swagger.security = [{
      "bearerAuth": []
    }]
  */

  auth,
  projectsController.deleteProject
);

module.exports = router;