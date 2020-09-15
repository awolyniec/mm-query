const { Review } = require('../data');


const main = (cb) => {
  const reviewData = {
    "productId": "5f5fb06903d6785cb2f64dc1",
    "stars": 4,
    "title": "Yeah a pretty decent meme",
    "user": "Jeremy Clarkson",
    "text": "If you grew up with Pokemon, you had a good childhood.",
  };
  const review = new Review(reviewData);
  review.save((err, review) => {
    if (err) {
      return cb(err);
    }
    console.log(`Created new review ${review._id}`);
    return cb();
  });
};

main((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Done!');
  process.exit();
});