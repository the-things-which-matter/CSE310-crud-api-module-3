# Overview
This project is a Task Management Web API developed using Node.js, Express, and MongoDB. The application allows users to manage tasks and projects through a fully documented Swagger UI and performs full CRUD operations on cloud-stored data.

This project was built to demonstrate key backend and cloud database concepts including RESTful API design, routing, authentication using Auth0, data validation, and full CRUD operations connected to MongoDB Atlas collections.

The software allows users to:

-Create, read, update, and delete tasks
-Create, read, update, and delete projects
-Authenticate users using OAuth (Auth0)
-Interact with API endpoints using Swagger UI
-Store and retrieve data from MongoDB cloud database


[Software Demo Video]()

# Cloud Database

This project uses a cloud hosted MongoDB Atlas database to store and manage application data. The database is structured into two main collections called Tasks and Projects. These collections allow the API to perform full CRUD operations including creating, reading, updating, and deleting records.

The system interacts with the cloud database through Express.js routes, and all changes are reflected in real time through Swagger UI testing and MongoDB Compass verification.

# Development Environment


The following tools and technologies were used to develop this software:

-Visual Studio Code
-Node.js
-Express.js
-MongoDB Atlas (Cloud Database)
-MongoDB Compass
-Swagger UI (API Documentation)
-Auth0 (OAuth Authentication)
-GitHub
-Render (Deployment Platform)

# Useful Websites

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Swagger Open AI Documentation](https://swagger.io/docs/)
-[auth0 documentation] (https://auth0.com/docs)