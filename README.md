# Task Management App

A simple full-stack Task Management application built using **React, Express, MongoDB, and Mongoose**.

This project demonstrates basic CRUD operations and how a React frontend communicates with an Express backend connected to MongoDB.

## 🚀 Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- CORS
- dotenv

## ✨ Features

- Add a new task
- View all tasks
- Edit a task
- Mark a task as completed
- Undo a completed task
- Delete a task
- Store tasks in MongoDB
- React frontend connected to Express REST API

## 📁 Project Structure

```text
LeapXCRUD/
│
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
