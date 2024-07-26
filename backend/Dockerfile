FROM bellsoft/liberica-openjdk-alpine:17

WORKDIR /app

COPY build/libs/*.jar application.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "application.jar"]