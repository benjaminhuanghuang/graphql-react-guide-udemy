## Install Appollo Client
- ref https://www.howtographql.com/react-apollo/1-getting-started/
```
    npm i -S apollo-boost graphq react-apollo graphql-tag
```
- apollo-client-preset offers some convenience by bundling several packages you need when working with Apollo Client:
    - apollo-client
    - apollo-cache-inmemory
    - apollo-link
    - apollo-link-http

- react-apollo contains the bindings to use Apollo Client with React.

- graphql-tag is a GraphQL parser. Every GraphQL operation you hand over to Apollo Client will have to be parsed by the gql function.

- graphql contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality.

In contrast to working with REST APIs, you don’t have to deal with constructing your own HTTP requests any more.
Instead you can simply write queries and mutations and send them using an **ApolloClient** instance.

## Graphql and React Compents
- ApolloClient

- ApolloProvider
    It provides an ApolloClient instance to all of your GraphQL components that either use the graphql() function, or the withApollo function.

- Apollo Store
    client side repository of all data that is coming form graphql server.


## Routing
- https://www.howtographql.com/react-apollo/4-routing/

