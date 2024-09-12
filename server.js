const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic server without endpoints
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
