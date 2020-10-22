const product = require('express').Router();

product.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = product;
