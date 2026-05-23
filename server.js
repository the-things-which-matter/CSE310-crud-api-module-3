const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

require("dotenv").config();


const db = require("./database/connect");
const tasksRoutes = require("./routes/tasks");
const projectsRoutes = require("./routes/projects");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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