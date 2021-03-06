const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { id: '23', firstName: 'Lily', age: 20 },
    { id: '30', firstName: 'Ben', age: 99 },
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
})

/*
    What's the meaning of root
*/
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryTpye',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
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