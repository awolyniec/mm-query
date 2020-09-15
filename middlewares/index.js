
const express = require('express');
const extend = require('extend');
const cors = require('cors');

const { url } = require('@awolyniec/mm-util/utils');

const env = process.env.NODE_ENV || 'development';

const uiDomain = url('http', 'memeMart', '');

const corsConfig = {
  base: {},
  development: {
    origin: [
      uiDomain
    ]
  }
};

const envCorsConfig = extend(true, {}, corsConfig.base, corsConfig[env]);

module.exports = {
  corsMiddleware: cors(envCorsConfig),
  jsonBodyParserMiddleware: express.json(),
};