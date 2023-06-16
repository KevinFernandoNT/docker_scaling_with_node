// Import dependencies
const express = require("express");
const os = require("os");

// Create an instance of Express
const app = express();

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send(`Hello, from host ${os.hostname}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
