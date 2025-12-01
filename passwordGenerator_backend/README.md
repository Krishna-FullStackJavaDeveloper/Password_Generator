# 🌐 Password Generator Backend

A powerful and customizable password generator API built with Spring Boot (Java 17).
It supports multiple password generation strategies like random, pronounceable, reference-based, multi-word logic, capitalization rules, symbols, numbers, and more.

This backend also includes Swagger UI, Docker support, and clean, extensible code architecture.

### 🚀 Features

- Generate strong passwords with flexible rules 
- Choose letters-per-word, number-of-words, capitalization type 
- Enable/disable numbers and symbols 
- Fully REST API based 
- Swagger UI enabled 
- Dockerized (easy deployment)
- Lightweight & fast (Spring Boot 3 + Java 17)

### 📌 API Endpoint
Generate Password : GET /api/generate

### Query Params
    Param	        Type	    Default	   Description
    lettersPerWord	int          6	        Number of letters per word
    numWords	int          2	        Total words in password
    includeNumbers	boolean	    true	Add numbers
    includeSymbols	boolean	    true	Add symbols
    capitalization	String	 capitalize	lowercase / allcaps / capitalize

### Example Request
    http://localhost:9091/api/generate?lettersPerWord=5&numWords=2&includeNumbers=true&includeSymbols=true&capitalization=allcaps

### Example Response
    {
    "password": "AB3D#PQ9LK"
    }

##  Swagger Documentation

After running the application, open:

👉 http://localhost:9091/swagger-ui.html

You can test all APIs interactively.

### 🛠️ Tech Stack
- Java 17 
- Spring Boot 3.2 
- Lombok 
- Swagger / Springdoc 
- Maven 
- Docker

### 📦 Build & Run (Without Docker)
1️⃣ Build the jar 

    mvn clean package -DskipTests

2️⃣ Run the application

    java -jar target/password-generator.jar

🐳 Run With Docker

1.Build Docker Image 

    docker build -t password-generator .

2.Run Container

    docker run -p 9091:9091 password-generator


Now open:

👉 http://localhost:9091/api/generate

👉 http://localhost:9091/swagger-ui.html

### 📁 Project Structure

    src/
    ├─ main/java/com/password_generator
    │   ├─ controller
    │   ├─ service
    │   ├─ util
    │   └─ PasswordGeneratorApplication.java
    ├─ main/resources
    │   └─ application.properties

### 🤝 Contributing

Feel free to fork this repo and submit pull requests.
Suggestions and improvements are always welcome!

### 📄 License

This project is created by Krishna Bhatt and is free to use for learning and personal projects.