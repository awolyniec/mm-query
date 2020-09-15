const async = require('async');

const { Review } = require('../data');

const REVIEW_DATA = [
  {
    "productId": "5f60e7347c381c92204994f7",
    "stars": 5,
    "title": "5 stars for Jeb!",
    "user": "Jeremy Clarkson",
    "text": "Jeb!",
  },
  {
    "productId": "5f60e7347c381c92204994f8",
    "stars": 5,
    "title": "Uhhhh...",
    "user": "Richard Hammond",
    "text": "Uhhhh....!",
  }
];

const main = cb => {
  async.eachSeries(REVIEW_DATA, (reviewData, eCb) => {
    const review = new Review(reviewData);
    review.save((err) => {
      if (err) {
        return eCb(err);
      }
      console.log(`Created new review ${review._id}`);
      return eCb();
    });
  }, cb);
};

main((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Done!');
  process.exit();
});