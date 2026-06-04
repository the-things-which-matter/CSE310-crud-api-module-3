const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Task Management API",
    description: "API for Tasks and Projects with Auth0 OAuth Authentication"
  },

  // For Lical development
  host: "cse341-node-rosx.onrender.com",
  schemes: ["https"],

  
  // Auth0 uses session cookies, not bearer tokenss
};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);