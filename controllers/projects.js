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
      .find({ _id: projectId })
      .toArray();

    res.status(200).json(result[0]);
  } catch (err) {
    res.status(400).json("Invalid ID");
  }
};

// POST project (VALIDATION)
const createProject = async (req, res) => {
  try {
    const project = req.body;

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

    await db
      .getDb()
      .db()
      .collection("projects")
      .updateOne(
        { _id: projectId },
        { $set: req.body }
      );

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Update failed");
  }
};

// DELETE project
const deleteProject = async (req, res) => {
  try {
    const projectId = new ObjectId(req.params.id);

    await db
      .getDb()
      .db()
      .collection("projects")
      .deleteOne({ _id: projectId });

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Delete failed");
  }
};

module.exports = {
  getAll,
  getSingle,
  createProject,
  updateProject,
  deleteProject,
};