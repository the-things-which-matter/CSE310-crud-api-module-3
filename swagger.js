const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Task Management API",
    description: "API for Tasks and Projects with Auth0 OAuth Authentication"
  },

  // For LOCAL development
  host: "localhost:3000",
  schemes: ["http"],

  
  // Auth0 uses session cookies, not bearer tokens
};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);