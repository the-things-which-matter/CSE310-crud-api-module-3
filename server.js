const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { auth, requiresAuth } = require("express-openid-connect");

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
// AUTH0 CONFIG
//
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

//
// MIDDLEWARE
//
app.use(cors());
app.use(express.json());

//
// AUTH0
// Automatically creates:
// /login
// /logout
// /callback
//
app.use(auth(config));

//
// SWAGGER DOCS
//
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//
// HOME ROUTE
//
app.get("/", (req, res) => {
  res.send(
    req.oidc.isAuthenticated()
      ? "Logged in to Task Management API"
      : "Logged out"
  );
});

//
// PROFILE ROUTE (TEST AUTH)
//
app.get("/profile", requiresAuth(), (req, res) => {
  res.status(200).json(req.oidc.user);
});

//
// PROTECTED ROUTES
//
app.use("/tasks", requiresAuth(), tasksRoutes);
app.use("/projects", requiresAuth(), projectsRoutes);

//
// DATABASE AND SERVER START
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