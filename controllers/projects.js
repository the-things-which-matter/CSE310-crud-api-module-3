const db = require("../database/connect");
const { ObjectId } = require("mongodb");

// GET all projects
const getAll = async (req, res) => {
  try {
    const result = await db
      .getDb()
      .db()
      .collection("projects")
      .find()
      .toArray();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET single project
const getSingle = async (req, res) => {
  try {
    const projectId = new ObjectId(req.params.id);

    const result = await db
      .getDb()
      .db()
      .collection("projects")
      .findOne({ _id: projectId });

    // Check if project exists
    if (!result) {
      return res.status(404).json("Project not found");
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json("Invalid project ID");
  }
};

// POST project 
const createProject = async (req, res) => {
  try {
    const project = req.body;

    // Validation
    if (!project.name || !project.owner) {
      return res.status(400).json("name and owner are required");
    }

    const result = await db
      .getDb()
      .db()
      .collection("projects")
      .insertOne(project);

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// PUT project 
const updateProject = async (req, res) => {
  try {
    const projectId = new ObjectId(req.params.id);

    // Validation
    if (!req.body.name || !req.body.owner) {
      return res.status(400).json("name and owner are required");
    }

    const result = await db
      .getDb()
      .db()
      .collection("projects")
      .updateOne(
        { _id: projectId },
        { $set: req.body }
      );

    // Check if project exists
    if (!result.matchedCount) {
      return res.status(404).json("Project not found");
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Invalid project ID");
  }
};

// DELETE project
const deleteProject = async (req, res) => {
  try {
    const projectId = new ObjectId(req.params.id);

    const result = await db
      .getDb()
      .db()
      .collection("projects")
      .deleteOne({ _id: projectId });

    // Check if project exists
    if (!result.deletedCount) {
      return res.status(404).json("Project not found");
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Invalid project ID");
  }
};

module.exports = {
  getAll,
  getSingle,
  createProject,
  updateProject,
  deleteProject,
};