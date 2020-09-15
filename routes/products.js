const express = require('express');

const { routes } = require('@awolyniec/mm-util');

const { Product } = require('../data');

const router = express.Router();

router.get(routes.mmQuery.products.featured, (req, res) => {
  Product.find({}).limit(4).lean(true).exec((err, products) => {
    if (err) {
      res.status(500).send('Server error when getting featured products');
    }
    res.send(products);
  });
});

router.get(routes.mmQuery.products.search, (req, res) => {
  Product.find({}).lean(true).exec((err, products) => {
    if (err) {
      res.status(500).send('Server error when getting products');
    }
    res.send(products);
  });
});

module.exports = router;