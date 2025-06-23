const express = require('express');

// Entry point for the application

// Import necessary modules

// Initialize the app
const app = express();

// Define a port
const PORT = 3000;

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});