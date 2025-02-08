const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('D:\มหาลัย\ปี 2\เนื้อหาบทเรียน\MVC\stock-manager')); // Serve frontend files

// Handle the `/api/products` POST route
app.post('/api/products', (req, res) => {
    console.log('Received product:', req.body);
    res.status(200).json({ message: 'Product added successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
