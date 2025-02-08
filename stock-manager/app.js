const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { addProduct, getAllProducts, getProductStats } = require('./backend/model');

const app = express();
const PORT = 8080;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Serve static files (e.g., CSS, JS) from the current directory
app.use(express.static('.'));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route for adding a product
app.post('/api/products', (req, res) => {
    const result = addProduct(req.body);
    res.json(result);
});

// API route for getting all products
app.get('/api/products', (req, res) => {
    res.json(getAllProducts());
});

// API route for getting product statistics
app.get('/api/stats', (req, res) => {
    res.json(getProductStats());
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
