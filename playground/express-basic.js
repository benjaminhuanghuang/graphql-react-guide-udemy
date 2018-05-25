const express = require('express');
const expressGraphQL = require('express-graphql');
// const schema = require('./schema-basic');
const schema = require('./schema-axios');

const app = express();

// Cause error: GraphQL middleware options must contain a schema.
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,   //can use the GraphiQL tool to manually issue GraphQL queries
}));

app.listen(8964, () => {
    console.log('Listening on port 8964')
});


/*
Quyer:
{
	user(id: "23"){
    id,
    firstName,
    age
  }
}
*/