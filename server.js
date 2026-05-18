const express = require("express");
const app = express();

require("dotenv").config();

const db = require("./database/connect");
const tasksRoutes = require("./routes/tasks");
const projectsRoutes = require("./routes/projects");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/tasks", tasksRoutes);
app.use("/projects", projectsRoutes);

app.get("/", (req, res) => {
  res.send("Task Management API Running");
});

db.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});