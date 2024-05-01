# Multi-File Uploader Application|Backend
This is a multi-file uploader application built Node.js, Express, Sequelize, and MySQL. It allows users to upload multiple files with descriptions, view, edit, and delete uploaded files. The front end part is built with React Typescript.

## Features
User-friendly interface for uploading multiple files with descriptions.
Display of uploaded files in a table format with download links.
Support for editing and deleting individual files.
Client-side validation to ensure file size is within limits.
Backend API endpoints for CRUD operations on files.
## Technologies Used
## Frontend:
React with TypeScript
## Backend:
Node.js with TypeScript
Express
Sequelize
MySQL
## Deployment:
Backend deployed on Render
Frontend deployed on Vercel

## Setup Instructions
Clone the repository
Install dependencies
Configure environment variables
Set up the database
Start the backend server:
npm start

## API Endpoints
GET /api/files: Retrieve all files.
POST /api/files: Upload a new file.
DELETE /api/files/:id: Delete a file.
PUT /api/files/:id: Update file information.

## Screenshots

![successful npm start](./screenshots/Screenshot%20(305).png "mysql connects successfully")
![post request in thunder client](./screenshots/Screenshot%20(306).png "post request success")
![post request in thunder client](./screenshots/Screenshot%20(310).png "successful post request")
![get request in thunder client](./screenshots/Screenshot%20(307).png "get all files")
![delete request in thunder client](./screenshots/Screenshot%20(308).png "delete a file")
![get request after delete](./screenshots/Screenshot%20(309).png "get all files request after a delete")
![update request](./screenshots/Screenshot%20(311).png "update a file's description")
![get a file updated](./screenshots/Screenshot%20(312).png "get request to an updated file")
![files table inside mysql db](./screenshots/Screenshot%20(316).png "select everything from files table in mysql workbench")