const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

// Accessing localhost:8964/graphql 
// will get error: GraphQL middleware options must contain a schema.
app.use('/graphql', expressGraphQL({
    graphiql: true,   //can use the GraphiQL tool to manually issue GraphQL queries
}));

app.listen(8964, () => {
    console.log('Listening on port 8964')
});
