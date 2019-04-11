const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();
/* Accessing localhost:8964/graphql will get error: 
  {
    "errors": [
      {
        "message": "GraphQL middleware options must contain a schema."
      }
    ]
  }
*/  
app.use('/graphql', expressGraphQL({
  // Nothing passed in
}));

app.listen(8964, () => {
    console.log('Graphql serer is running on port 8964')
});
