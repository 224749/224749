# Enroll Policy Insurance

A Spring Boot web application for managing insurance policy enrollments.

## Features

- User-friendly form for policy enrollment
- Validation for required fields and name length
- Local storage for persisting enrolled policies
- Responsive design using Bootstrap
- Success popup after policy enrollment
- View all enrolled policies
- GitHub Pages deployment

## Requirements

- Java 17 or higher
- Maven 3.6 or higher

## Running the Application

1. Clone the repository
2. Open in VS Code
3. Press `Ctrl + Shift + B` to run the default build task
4. Open http://localhost:8080 in your browser

## Technologies Used

- Spring Boot 3.1.0
- Spring MVC
- Thymeleaf
- Bootstrap 5.3.0
- Local Storage API
- GitHub Actions for deployment

## Development

The project uses Maven for dependency management and build automation. The main application class is `PolicyApplication.java`.

### Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── insuremo/
│   │           └── policy/
│   │               ├── PolicyApplication.java
│   │               ├── controller/
│   │               │   └── PolicyController.java
│   │               └── model/
│   │                   └── Policy.java
│   └── resources/
│       ├── static/
│       │   ├── css/
│       │   │   └── style.css
│       │   └── js/
│       │       ├── script.js
│       │       └── enrolled-policies.js
│       └── templates/
│           ├── index.html
│           └── enrolled-policies.html
```
