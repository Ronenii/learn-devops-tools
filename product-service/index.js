const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory "database" for products
let products = [
  { id: 1, name: 'Widget', price: 9.99 },
  { id: 2, name: 'Gadget', price: 14.99 },
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add a product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = { id, name, price };
  products.push(newProduct);
  res.json(newProduct);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Products Service listening on port ${PORT}`);
});
