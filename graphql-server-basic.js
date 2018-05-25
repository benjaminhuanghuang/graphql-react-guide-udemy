var express = require('express');
var graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema-basic');


var app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,   //can use the GraphiQL tool to manually issue GraphQL queries
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

/* Usage
{
    user(id:"23") {
        id
        firstName
    }
}
*/