# Secure Audit System

## Overview
The Secure Audit System is a web application designed to provide encryption and auditing capabilities for API requests. It ensures the immutability of information and proper encryption of requests, making it suitable for applications that require secure data handling and logging.

## Features
- **Middleware Interception**: Intercepts all incoming API requests to perform encryption and logging.
- **Encryption Services**: Utilizes a centralized encryption service to secure sensitive data.
- **Immutable Logging**: Ensures that all log records are stored immutably, preventing unauthorized modifications.
- **Audit Trail**: Maintains a comprehensive audit trail of all API interactions for accountability and traceability.
- **Web Interface**: Provides a simple web page for easy access and testing of the encryption functionality.

## Requirements
- Functional requirements are detailed in the `docs/REQUIREMENTS.md` file.
- Non-functional requirements, including performance and security considerations, are outlined in the `docs/NON_FUNCTIONAL_REQUIREMENTS.md` file.

## User Stories
User stories describing the functionality from the user's perspective can be found in the `docs/USER_STORIES.md` file.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/jorgealveardia-netizen/PARCIAL-ING-SOFTWARE.git
   ```
2. Navigate to the project directory:
   ```
   cd secure-audit-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables by copying the `.env.example` to `.env` and configuring it as needed.

## Usage
To start the application, run:
```
npm start
```
The server will initialize and listen for incoming API requests on port 3000.

### Web Interface
Once the server is running, open your browser and navigate to `http://localhost:3000` to access the web interface. You can use the form to encrypt data and see the results directly in the browser. The interface features a modern design with a gradient background, centered layout, and responsive styling for an improved user experience.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.