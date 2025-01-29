const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Serve a simple static homepage from public/ directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route to fetch products from the Products service
app.get('/api/products', async (req, res) => {
  try {
    // Replace 'products-service' with the actual hostname or service name in Kubernetes
    const response = await axios.get('http://products-service:3001/products');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
});

// Example route to fetch orders from the Orders service
app.get('/api/orders', async (req, res) => {
  try {
    // Replace 'orders-service' with the actual hostname or service name in Kubernetes
    const response = await axios.get('http://orders-service:3002/orders');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching orders');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend Service listening on port ${PORT}`);
});
