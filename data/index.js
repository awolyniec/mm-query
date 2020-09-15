const mongoose = require('mongoose');

const { config } = require('@awolyniec/mm-util');

const ProductSchema = require('./schemas/Product');
const ReviewSchema = require('./schemas/Review');

const env = process.env.NODE_ENV || 'development';

const mongoConfig = config.mmQuery.mongo;
const { domain, port, db } = mongoConfig;

const mongoUrl = `mongodb://${domain}:${port}/${db}`;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
// TODO: come up with index build for production 
if (env == 'production') {
  mongoOptions.autoIndex = false;
}

mongoose.connect(mongoUrl, mongoOptions)
  .catch(error => console.log(JSON.stringify(error)));

mongoose.connection.on('open', error => {
  console.log(`Connected to ${mongoUrl}`);
});

mongoose.connection.on('error', error => {
  console.log(JSON.stringify(error));
});

/*
  create models
*/

const Product = mongoose.model('Product', ProductSchema);
const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
  Product,
  Review
};
