# Node.js HTTP Server
This is a simple HTTP server built using Node.js. It handles both GET and POST requests, stores submitted POST data, and allows users to retrieve it through specific routes.

### Features
GET Requests:

- /: Root route that returns a welcome message.
- /about: Returns information about the server.
- /data: Displays stored POST data (if available) or informs that no data has been posted yet.
- POST Requests:
- /submit: Accepts and stores data sent in the request body.
- Error Handling:

Responds with appropriate HTTP status codes for unhandled routes, methods, or request errors.
# Getting Started
### Prerequisites
Node.js: Ensure that you have Node.js installed on your machine. You can download it from here.
### Installation
Clone this repository or download the server file.
Navigate to the project directory in your terminal.
Run the server:
````bash
Copy code
node server.js
Server Endpoints
````
### Method	Route	Description

- GET	/	Returns a welcome message.
- GET	/about	Provides information about the server.
- GET	/data	Returns stored POST data (if available).
- POST	/submit	Accepts and stores POST data.

### Example Usage
````GET /
bash
Copy code
curl http://localhost:3000/
Response:
````
### css
````
Copy code
Welcome to the root route!
GET /about
````
### bash
````
Copy code
curl http://localhost:3000/about
Response:
````
### csharp
````
Copy code
This is the about page.
POST /submit
To send data via a POST request:
````
### bash
````
Copy code
curl -X POST -d "message=Hello, World!" http://localhost:3000/submit
Response:
````
````
Copy code
Data received and stored
GET /data
To retrieve stored data:
````

### bash
````
Copy code
curl http://localhost:3000/data
Response (if data was submitted):
````
### json
````
Copy code
{
  "message": "Here is the posted data",
  "data": "message=Hello, World!"
}
Response (if no data was submitted yet):
````

### json
````
Copy code
{
  "message": "No data posted yet!",
  "data": null
}
````
### Error Handling

- 404 Not Found: Returned if an unhandled route is accessed.
- 405 Method Not Allowed: Returned if a method other than GET or POST is used.
- 400 Bad Request: Returned if a request error occurs.
- 500 Internal Server Error: Returned if a server-side error occurs.
