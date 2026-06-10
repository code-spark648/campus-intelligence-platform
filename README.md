#  Campus Intelligence Platform

An AI-powered Campus Intelligence Platform built using React, FastAPI, and MCP (Model Context Protocol) architecture.

---

#  Overview

Campus Intelligence Platform is a centralized student portal that combines:

- Library Management
- Events Management
- Academics Information
- Student Profile System
- AI Assistant with MCP Routing
- Authentication System

The AI Assistant intelligently routes user queries to the correct MCP service and retrieves information from the backend.

---

# Architecture

Frontend (React + TypeScript)

↓

AI Assistant

↓

MCP Routing Layer

├── Library MCP

├── Events MCP

├── Academics MCP

└── Student MCP

↓

FastAPI Backend

↓

JSON Data Sources

---

#  Features

## Library MCP

- View available books
- Check book availability
- Library statistics
- Book copy information

## Events MCP

- View campus events
- Event schedules
- Upcoming activities

## Academics MCP

- View courses
- Faculty information
- Academic details

## Student MCP

- Student profile dashboard
- Department information
- CGPA details

## AI Assistant

- Natural language queries
- MCP-based intelligent routing
- Multi-service integration

## Authentication

- Login page
- Protected routes
- Session management

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- Axios

## Backend

- FastAPI
- Python
- Uvicorn

## Architecture

- MCP (Model Context Protocol)

## Data Storage

- JSON-based storage

---

# Project Structure

```text
campus-intelligence-platform
│
├── backend
│   ├── data
│   │   ├── books.json
│   │   ├── events.json
│   │   ├── academics.json
│   │   └── profile.json
│   │
│   ├── mcp
│   │   ├── libraryServer.py
│   │   ├── eventsServer.py
│   │   └── academicsServer.py
│   │
│   └── main.py
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   └── assets
│   │
│   └── public
│
└── README.md
```

---

# ⚙️ Installation

## Backend Setup

```bash
cd backend

pip install fastapi uvicorn

uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```
#  Future Enhancements

- Gemini AI Integration
- OpenAI Integration
- PostgreSQL Database Integration
- Cloud Deployment
- Real-Time Notifications
- Role-Based Access Control (RBAC)
- Analytics Dashboard
- Mobile Application Support

---
# License

This project is developed for educational and learning purposes.
