# Use an OpenJDK 21 base image
FROM eclipse-temurin:21-jdk

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/ems-backend.jar app.jar

# Expose the backend port
EXPOSE 8081

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
