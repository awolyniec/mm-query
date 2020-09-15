const { Product } = require('../data');

const main = (cb) => {
  const productData = {
    "name": "It's All Tendies",
    "imageUrl": "images/Merchandise/0a8.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Common",
    "isBestseller": true
  };
  const product = new Product(productData);
  product.save((err, product) => {
    if (err) {
      return cb(err);
    }
    console.log(`Created new product ${product._id}`);
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