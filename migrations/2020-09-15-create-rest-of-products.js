const async = require('async');

const { Product } = require('../data');

const PRODUCT_DATA = [
  {
    "name": "Buff Doge - Dogs Then vs. Now",
    "imageUrl": "images/Merchandise/2be.png",
    "price": 99,
    "onSale": true,
    "rarity": "Common"
  },
  {
    "name": "It's All Jeb",
    "imageUrl": "images/Merchandise/6d0.jpg",
    "price": 199,
    "onSale": true,
    "rarity": "Rare"
  },
  {
    "name": "Laughing Jerry Pokemon Trainer",
    "imageUrl": "images/Merchandise/7ux0uk3llrc51.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Buff Doge Can't Draw",
    "imageUrl": "images/Merchandise/53a.png",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Where's The Change",
    "imageUrl": "images/Merchandise/418.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Always Has Been - Death Star",
    "imageUrl": "images/Merchandise/ac8.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Always Has Been - Kirby",
    "imageUrl": "images/Merchandise/bbe.png",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Buff Doge Grandpa",
    "imageUrl": "images/Merchandise/buff-doge-grandpa.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Buff Doge Plants",
    "imageUrl": "images/Merchandise/c62.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Cat Proud of Self",
    "imageUrl": "images/Merchandise/cat-meme-joke-1.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Cat Blame Dog",
    "imageUrl": "images/Merchandise/cat-memes-lede-1300x890.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Microsoft Word Squiggly",
    "imageUrl": "images/Merchandise/e45.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Rare"
  },
  {
    "name": "Hovercat",
    "imageUrl": "images/Merchandise/lede-cat-memes.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Man Arrested for Everything",
    "imageUrl": "images/Merchandise/meme.jpeg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Patrick For President",
    "imageUrl": "images/Merchandise/patrick4prez.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  },
  {
    "name": "Attempt Made",
    "imageUrl": "images/Merchandise/the-attempt.jpg",
    "price": 99,
    "onSale": true,
    "rarity": "Uncommon"
  }
];

const main = cb => {
  async.eachSeries(PRODUCT_DATA, (productData, eCb) => {
    const product = new Product(productData);
    product.save((err) => {
      if (err) {
        return eCb(err);
      }
      console.log(`Created new product ${product._id}`);
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