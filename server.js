// // Importing the http Module
// const http = require('http');
// const {url}=require('url');

// const port=3000;

// //creating server with error handling
// const server = http.createServer((req, res) => {

// //Parse the url
// const url =new URL(req.url,'http://${req.headers.host}');


// //Routing logic
// if(url.pathname ==='GET'){
//   if(url.pathname ==='/'){

//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Welcome to the root route!');
//   } else if (url.pathname === '/about'){
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     res.end('This is the about page');
//   } else {
//     res.writeHead(404, {'Content-Type ': 'text/plain'})
//     res.end('Not Found');
//   }
// } else if (req.method ===' POST'){
//   if(url.pathname === '/submit') {
//     let body = ' ';



//     //Collect the data
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });


//     //when data is fully received
//     req.on('end', () => {
//       console.log('Received POST data: ',body);
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('Data received');
//     });
//   } else { 
//     res.writeHead(404, {'Content-Type ': 'text/plain'});
//     res.end('Not Found');
//   }
// } else {
//   res.writeHead(405, { 'Content-Type ': 'text/plain'});
//   res.end('Not Found');
// }

//   //handing request errors
//   req.on('error', (err) => {
//     console.log('Request error occurred :>> ', err);
//     res.statusCode = 400;
//     return res.end('Bad Request!');
//   })
// //handling response errors
//   res.on('error', (err) => {
//     console.log('Response error occurred :>> ', err);
//     res.statusCode = 500;
//     return res.end('Internal Server Error!');
//   })
// //sending response
//   res.end('All good!');
// });
// //starting the server
// server.listen(port, () => {
//   console.log('Server started on localhost:3000!');
// })


// const http = require('http');
// const { URL } = require('url');

// const port = 3000;

// // Creating server with error handling
// const server = http.createServer((req, res) => {

//     // Parse the URL
//     const url = new URL(req.url, `http://${req.headers.host}`);

//     // Routing logic
//     if (req.method === 'GET') {
//         if (url.pathname === '/') {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('Welcome to the root route!');
//         } else if (url.pathname === '/about') {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('This is the about page.');
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//         }
//     } else if (req.method === 'POST') {
//         if (url.pathname === '/submit') {
//             let body = '';

//             // Collect the data
//             req.on('data', chunk => {
//                 body += chunk.toString();
//             });

//             // When data is fully received
//             req.on('end', () => {
//                 console.log('Received POST data:', body);
//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.end('Data received');
//             });
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//         }
//     } else {
//         res.writeHead(405, { 'Content-Type': 'text/plain' });
//         res.end('Method Not Allowed');
//     }

//     // Handling request errors
//     req.on('error', (err) => {
//         console.log('Request error occurred :>> ', err);
//         res.statusCode = 400;
//         return res.end('Bad Request!');
//     });

//     // Handling response errors
//     res.on('error', (err) => {
//         console.log('Response error occurred :>> ', err);
//         res.statusCode = 500;
//         return res.end('Internal Server Error!');
//     });

//     // Sending default response only if not ended earlier
//     if (!res.writableEnded) {
//         res.end('All good!');
//     }
// });

// // Starting the server
// server.listen(port, () => {
//     console.log(`Server started on localhost:${port}!`);
// });


const http = require('http');
const { URL } = require('url');

const port = 3000;

// Variable to store posted data
let storedData = null;

// Creating server with error handling
const server = http.createServer((req, res) => {
    // Parse the URL
    const url = new URL(req.url, `http://${req.headers.host}`);

    // Routing logic for GET requests
    if (req.method === 'GET') {
        if (url.pathname === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the root route!');
        } else if (url.pathname === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the about page.');
        } else if (url.pathname === '/data') {
            // Show the stored data (if any)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: storedData ? 'Here is the posted data' : 'No data posted yet!',
                data: storedData
            }));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } 
    // Routing logic for POST requests
    else if (req.method === 'POST') {
        if (url.pathname === '/submit') {
            let body = '';

            // Collect the data
            req.on('data', chunk => {
                body += chunk.toString();
            });

            // When data is fully received
            req.on('end', () => {
                console.log('Received POST data:', body);
                // Store the data
                storedData = body;
                
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Data received and stored');
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }

    // Handling request errors
    req.on('error', (err) => {
        console.log('Request error occurred :>> ', err);
        res.statusCode = 400;
        res.end('Bad Request!');
    });

    // Handling response errors
    res.on('error', (err) => {
        console.log('Response error occurred :>> ', err);
        res.statusCode = 500;
        res.end('Internal Server Error!');
    });
});

// Starting the server
server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});
