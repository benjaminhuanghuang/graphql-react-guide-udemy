
## Key points
- What is root value
https://github.com/graphql/graphql-js/blob/2592e1293c650eef1e06760ce85fb29f125568b9/src/utilities/schemaPrinter.js#L123

 GraphQL schema define root types for each type of operation. These types are
 the same as any other type and can be named in any manner, however there is a common naming convention:
 ```
    schema {
      query: Query
      mutation: Mutation
    }
```

- What is the parent value


## Graphql DataType
- GraphQLSchema
```
  new GraphQLSchema({
    query: RootQuery
  });
```

- GraphQLObjectType

- GraphQLString

- GraphQLInt

