
---

## **Full-Stack Project README**

```markdown
# Password Generator - Full Stack Application

This is a **full-stack Password Generator app** with a React frontend and Spring Boot backend. Both services are Dockerized and can run together using Docker Compose.

## Features
- Generate strong passwords with multiple options
- Frontend built with React and Material UI
- Backend built with Spring Boot (Java 17)
- Dockerized for consistent environment
- Docker Compose setup for running frontend and backend simultaneously
- Environment variable support for API URLs
- CORS configuration for local development and Docker networking

## Tech Stack
- **Frontend:** React 18, Material UI, Axios, Nginx
- **Backend:** Spring Boot 3.2, Java 17
- **Containerization:** Docker, Docker Compose

## Prerequisites
- Node.js 20+ (for frontend development)
- npm (for frontend development)
- Java 17+ (for backend development)
- Docker & Docker Compose

## Getting Started (Local Development)
1. **Clone the repository**
```bash
git clone <repo-url>
cd Password_Generator

## Run Backend

    cd passwordGenerator_backend
    mvn clean package
    java -jar target/password-generator.jar

## Run Frontend

    cd password_generator_frontend
    npm install
    npm start

### Frontend runs on http://localhost:3000 and backend on http://localhost:9091.

## Build and start both services
docker-compose up --build

# Docker Compose Notes
- The frontend container uses environment variable REACT_APP_API_URL=http://backend:9091/api for backend API calls.
- Both services run on a custom bridge network (app-network) to communicate internally.

# Author
## Krishna Bhatt