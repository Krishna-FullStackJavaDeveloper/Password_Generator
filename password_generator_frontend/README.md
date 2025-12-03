# Password Generator - Frontend

This is the **React frontend** for the Password Generator application. It provides a user interface for generating strong passwords with customizable options.

## Features
- Generate strong passwords with:
  - Customizable number of words and letters
  - Option to include numbers and symbols
  - Capitalization styles
- Responsive design
- Dark/light theme toggle
- Connects to backend API for password generation
- Dockerized for easy deployment with Nginx

## Demo
Access the app locally: `http://localhost:3000`

## Tech Stack
- React 18
- Material UI (MUI)
- Axios for API calls
- Docker + Nginx for production build

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- Docker (optional for containerized deployment)

### Installation
```bash
# Clone the repo
git clone <frontend-repo-url>
cd password_generator_frontend

# Install dependencies
npm install

# Run the app locally
npm start

# Build Docker image
docker build -t frontend-password-generator .

# Run the container
docker run -p 3000:80 frontend-password-generator

# API Integration

- Frontend communicates with the backend using the environment variable REACT_APP_API_URL. Update this value when running in Docker or production.

    Project Structure
    src/
    components/   # UI components (PasswordForm, ResultBox)
    App.js        # Main App
    api.js        # API calls
    Dockerfile      # Docker build for frontend
    nginx.conf      # Custom Nginx config

