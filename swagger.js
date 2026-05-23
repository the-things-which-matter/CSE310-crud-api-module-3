const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Task Management API",
    description: "API for Tasks and Projects"
  },
  host: "cse341-node-rosx.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);