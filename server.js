const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

// Database
const db = require("./database/connect");

// Routes
const tasksRoutes = require("./routes/tasks");
const projectsRoutes = require("./routes/projects");

const PORT = process.env.PORT || 3000;

//
//  MIDDLEWARE
//
app.use(cors());
app.use(express.json());

//
//  SWAGGER DOCS
//
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//
//  LOGIN ROUTE (WITH DEBUGGING ADDED)
//
app.post(
  "/login",

  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Login credentials',
      required: true,
      schema: {
        username: 'brima',
        password: '123456'
      }
    }
  */

  (req, res) => {
    console.log(" LOGIN ROUTE HIT"); // DEBUG 1

    try {
      const jwt = require("jsonwebtoken");

      console.log(" REQUEST BODY:", req.body); // DEBUG 2
      console.log(" JWT SECRET EXISTS:", !!process.env.JWT_SECRET); // DEBUG 3
      console.log(" JWT SECRET VALUE:", process.env.JWT_SECRET); // DEBUG 4

      const user = {
        id: 1,
        name: "brima"
      };

      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h"
      });

      console.log(" TOKEN CREATED SUCCESSFULLY"); // DEBUG 5

      return res.status(200).json({
        token,
        message: "Login successful"
      });

    } catch (err) {
      console.log(" LOGIN ERROR OCCURRED:");
      console.log(err); // DEBUG 6

      return res.status(500).json({
        error: "Login failed",
        details: err.message
      });
    }
  }
);

//
//  ROUTES
//
app.use("/tasks", tasksRoutes);
app.use("/projects", projectsRoutes);

//
//  HOME ROUTE
//
app.get("/", (req, res) => {
  res.send("Task Management API Running");
});

//
//  DATABASE  and  SERVER START
//
db.initDb((err) => {
  if (err) {
    console.log("Database connection error:", err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});