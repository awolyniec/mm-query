const express = require('express');

const { routes } = require('@awolyniec/mm-util');

const { Review } = require('../data');

const router = express.Router();

router.get(routes.mmQuery.reviews.bulkByProductId, (req, res) => {
  const { productId } = req.query;
  Review.find({ productId }).lean(true).exec((err, reviews) => {
    if (err) {
      res.status(500).send('Server error when getting reviews by product id');
    }
    res.send(reviews);
  });
});

module.exports = router;