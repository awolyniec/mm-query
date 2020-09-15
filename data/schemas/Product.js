const Schema = require('mongoose').Schema;

const { constants } = require('@awolyniec/mm-util');

const { PRODUCT_RARITY_MAP } = constants;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  deletedAt: Date,
  onSale: Boolean,
  isBestseller: Boolean,
  rarity: {
    type: String,
    enum: Object.values(PRODUCT_RARITY_MAP)
  }
});

module.exports = productSchema;
