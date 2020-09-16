const express = require('express');

const { routes } = require('@awolyniec/mm-util');

const { Review } = require('../data');

const router = express.Router();

router.get(routes.mmQuery.reviews.bulkByProductId, (req, res) => {
  const { productIds } = req.query;
  Review.find({ productId: { $in: productIds } }).lean(true).exec((err, reviews) => {
    if (err) {
      res.status(500).send('Server error when getting bulk reviews by product id');
    }
    res.send(reviews);
  });
});

module.exports = router;