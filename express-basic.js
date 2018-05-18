var express = require('express');
var expressGraphQL = require('express-graphql');

var app = express();

// Cause error: GraphQL middleware options must contain a schema.
app.use('/graphql', expressGraphQL({
    graphiql: true,   //can use the GraphiQL tool to manually issue GraphQL queries
}));

app.listen(8964, () => {
    console.log('Listening on port 8964')
});
