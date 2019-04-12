const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
//
const schema = require('./schema/schema');

require('./db/mongoose')

const app = express();

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;
