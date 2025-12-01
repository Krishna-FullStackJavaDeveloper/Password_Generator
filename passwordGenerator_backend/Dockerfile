# Step 1: Use OpenJDK 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Step 2: Label (optional)
LABEL authors="Krishna"

# Step 3: Working directory inside container
WORKDIR /app

# Step 4: Copy the built JAR file into the container
COPY target/password-generator.jar app.jar

# Step 5: Expose the port your Spring Boot app uses
EXPOSE 9091

# Step 6: Command to run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
