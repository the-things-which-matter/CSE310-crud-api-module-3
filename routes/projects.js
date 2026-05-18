const express = require("express");
const router = express.Router();

const projectsController = require("../controllers/projects");

// GET all
router.get("/", projectsController.getAll);

// GET one
router.get("/:id", projectsController.getSingle);

// POST
router.post("/", projectsController.createProject);

// PUT
router.put("/:id", projectsController.updateProject);

// DELETE
router.delete("/:id", projectsController.deleteProject);

module.exports = router;