const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Task Management API",
    description: "API for Tasks and Projects with JWT Authentication"
  },

  // LOCAL DEVELOPMENT SETTINGS
  host: "cse341-node-rosx.onrender.com",
  schemes: ["https"],

  //  JWT AUTH Configuration
 securityDefinitions: {
  bearerAuth: {
    type: "apiKey",
    name: "Authorization",
    in: "header",
    description: "Paste ONLY the token (Bearer will be added automatically in your mind — but Swagger still requires full format unless we fix middleware)"
  }
}


};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);