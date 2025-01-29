const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// In-memory "database" for orders
let orders = [
  { id: 1, productId: 1, quantity: 2 },
  { id: 2, productId: 2, quantity: 1 },
];

// Get all orders
app.get("/orders", (req, res) => {
  console.log(`Got request from ${req.get('host')}`);
  res.json(orders);
});

// Place a new order
app.post("/orders", (req, res) => {
  const { productId, quantity } = req.body;
  const id = orders.length ? orders[orders.length - 1].id + 1 : 1;
  const newOrder = { id, productId, quantity };
  orders.push(newOrder);
  res.json(newOrder);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Orders Service listening on port ${PORT}`);
});
