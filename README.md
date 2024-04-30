** Multi-File Uploader Application|Backend
This is a multi-file uploader application built Node.js, Express, Sequelize, and MySQL. It allows users to upload multiple files with descriptions, view, edit, and delete uploaded files. The front end part is built with React Typescript.

* Features
User-friendly interface for uploading multiple files with descriptions.
Display of uploaded files in a table format with download links.
Support for editing and deleting individual files.
Client-side validation to ensure file size is within limits.
Backend API endpoints for CRUD operations on files.
* Technologies Used
* Frontend:
React with TypeScript
* Backend:
Node.js with TypeScript
Express
Sequelize
MySQL
* Deployment:
Backend deployed on Render
Frontend deployed on Vercel

* Setup Instructions
Clone the repository
Install dependencies
Configure environment variables
Set up the database
Start the backend server:
npm start

** API Endpoints
GET /api/files: Retrieve all files.
POST /api/files: Upload a new file.
DELETE /api/files/:id: Delete a file.
PUT /api/files/:id: Update file information.

Screenshots

