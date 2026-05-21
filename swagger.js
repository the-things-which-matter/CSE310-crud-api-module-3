const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Task Management API",
    description: "API for Tasks and Projects"
  },
  host: "localhost:3000",
  schemes: ["http"]
};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);