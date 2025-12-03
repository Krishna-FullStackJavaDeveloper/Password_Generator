## **Full-Stack Project README**

## App Demo

[Watch the StrongPass Generator Demo on YouTube](https://youtu.be/9lGFqyc9Uj4)


## Password Generator - Full Stack Application

This is a **full-stack Password Generator app** with a React frontend and Spring Boot backend. Both services are Dockerized and can run together using Docker Compose.

### Features
- Generate strong passwords with multiple options
- Frontend built with React and Material UI
- Backend built with Spring Boot (Java 17)
- Dockerized for consistent environment
- Docker Compose setup for running frontend and backend simultaneously
- Environment variable support for API URLs
- CORS configuration for local development and Docker networking

### Tech Stack
- **Frontend:** React 18, Material UI, Axios, Nginx
- **Backend:** Spring Boot 3.2, Java 17
- **Containerization:** Docker, Docker Compose

### Prerequisites
- Node.js 20+ (for frontend development)
- npm (for frontend development)
- Java 17+ (for backend development)
- Docker & Docker Compose

### Getting Started (Local Development)
1. **Clone the repository**
```bash
git clone <repo-url>
cd Password_Generator
```
2. **Run Backend**
````bash
cd passwordGenerator_backend
mvn clean package
java -jar target/password-generator.jar
````
3. **Run Frontend**
```bash
cd password_generator_frontend
npm install
npm start
```
4. Frontend runs on http://localhost:3000 and backend on http://localhost:9091.
   
## Running with Docker & Docker Compose
#### Build and start both services
    docker-compose up --build

    Frontend: http://localhost:3000
    Backend: http://localhost:9091

### Docker Compose Notes
- The frontend container uses environment variable REACT_APP_API_URL=http://backend:9091/api for backend API calls. 
- Both services run on a custom bridge network (app-network) to communicate internally.

## Project Structure
    password_generator_frontend/   # React frontend
    passwordGenerator_backend/     # Spring Boot backend
    docker-compose.yml             # Compose setup for both services

# Author: Krishna Bhatt


