# Note Taker Starter Code
# Backend Scripts Documentation

## Overview
This documentation outlines the backend scripts developed for managing API and HTML routes in an Express.js application. The scripts handle routing, file reading and writing, and server configuration.

## Technologies Used
- Node.js
- Express.js

## Installation

To run these scripts, Node.js must be installed on your machine. After cloning the repository, run the following command to install the necessary packages:

bash
npm install
Scripts
server.js
This script sets up the server with the following configurations:

Initializes the Express app.
Sets the server to listen on a specified port, defaulting to 3001.
Uses middleware for JSON parsing, URL encoding, and serving static files.
Defines routes for HTML endpoints and API endpoints.
Includes a catch-all route to redirect all other requests to the homepage.
index.js
This script manages API endpoints specifically for handling notes. It includes the following functionalities:

GET /notes: Returns all notes by reading from a JSON file.
POST /notes: Adds a new note to the JSON file.
DELETE /notes: Deletes a specific note from the JSON file using its unique ID.
Usage
To start the server, run:

bash
Copy code
npm start
This will activate the server at http://localhost:3001, where you can access the API through defined endpoints or view the served HTML pages.

# Contributing

Contributions to the project are welcome. Ensure to follow the existing code style and include comments where necessary. For major changes, please open an issue first to discuss what you would like to change. 
-EdX UT Bootcamp Starter Code(Public/Frontend)

# License
MIT