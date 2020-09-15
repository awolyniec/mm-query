
const express = require('express');

const { config } = require('@awolyniec/mm-util');

const { corsMiddleware, jsonBodyParserMiddleware } = require('./middlewares');
const routes = require('./routes');
require('./data'); // to connect to db 

const serverConfig = config.mmQuery;
const { port } = serverConfig;

const app = express();

app.use([
  corsMiddleware,
  jsonBodyParserMiddleware
]);

// apply routers
app.use(routes);

app.listen(port, () => {
  console.log(`mm-query listening on ${port}`);
});