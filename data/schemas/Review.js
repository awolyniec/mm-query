const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  user: { // will be replaced wirth userId later on
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  deletedAt: Date
});

reviewSchema.index({ productId: 1, createdAt: 1 });

module.exports = reviewSchema;
