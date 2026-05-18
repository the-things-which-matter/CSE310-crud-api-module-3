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
      .find({ _id: taskId })
      .toArray();

    res.status(200).json(result[0]);
  } catch (err) {
    res.status(400).json("Invalid ID or request");
  }
};

// POST task (VALIDATION INCLUDED)
const createTask = async (req, res) => {
  try {
    const task = req.body;

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

// PUT task (UPDATE)
const updateTask = async (req, res) => {
  try {
    const taskId = new ObjectId(req.params.id);

    const result = await db
      .getDb()
      .db()
      .collection("tasks")
      .updateOne(
        { _id: taskId },
        { $set: req.body }
      );

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Invalid update request");
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

    res.status(204).send();
  } catch (err) {
    res.status(400).json("Invalid delete request");
  }
};

module.exports = {
  getAll,
  getSingle,
  createTask,
  updateTask,
  deleteTask,
};