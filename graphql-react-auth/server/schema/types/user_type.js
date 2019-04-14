const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name:  'UserType',
  fields: {
      email : {type: GraphQLString}
    }
});

module.exports = UserType;
