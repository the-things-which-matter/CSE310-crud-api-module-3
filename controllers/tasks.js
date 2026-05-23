const db = require("../database/connect");
const { ObjectId } = require("mongodb");

// GET all tasks
const getAll = async (req, res) => {
  try {
    const result = await db
      .getDb()
      .db()
      .collection("tasks")
      .find()
      .toArray();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET single task
const getSingle = async (req, res) => {
  try {
    const taskId = new ObjectId(req.params.id);

    const result = await db
      .getDb()
      .db()
      .collection("tasks")
      .findOne({ _id: taskId });

    // Check if task exists
    if (!result) {
      return res.status(404).json("Task not found");
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json("Invalid task ID");
  }
};

// POST task 
const createTask = async (req, res) => {
  try {
    const task = req.body;

    // Validation
    if (!task.title) {
      return res.status(400).json("title is required");
    }

    const result = await db
      .getDb()
      .db()
      .collection("tasks")
      .insertOne(task);

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// PUT task 
const updateTask = async (req, res) => {
  try {
    const taskId = new ObjectId(req.params.id);

    // Validation
    if (!req.body.title) {
      return res.status(400).json("title is required");
    }

    const result = await db
      .getDb()
      .db()
      .collection("tasks")
      .updateOne(
        { _id: taskId },
        { $set: req.body }
      );

    // Check if task exists
    if (!result.matchedCount) {
      return res.status(404).json("Task not found");
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Invalid task ID");
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    const taskId = new ObjectId(req.params.id);

    const result = await db
      .getDb()
      .db()
      .collection("tasks")
      .deleteOne({ _id: taskId });

    // Check if task exists
    if (!result.deletedCount) {
      return res.status(404).json("Task not found");
    }

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Invalid task ID");
  }
};

module.exports = {
  getAll,
  getSingle,
  createTask,
  updateTask,
  deleteTask,
};