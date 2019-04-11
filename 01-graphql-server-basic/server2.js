const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./user-schema');

const app = express();
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,   //enable GraphiQL tool at http://localhost:8964/graphql to send GraphQL queries
}));

app.listen(8964, () => {
    console.log('Graphql serer is running on port 8964')
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