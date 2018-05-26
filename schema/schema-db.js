const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3721/companies/${parentValue.id}/users`)
                    .then(res => res.data)
            }
        }
    })
});

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
        ,
        // Nested query
        company: {
            type: CompanyType,
            reslove(parentValue, args) {
                consloe.log('dafdasdf', parentValue.companyId)
                return axios.get(`http://localhost:3721/companies/${parentValue.companyId}`)
                    .then(resp => resp.data);
            }
        }
    }
});



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
                // return a promise
                return axios.get(`http://localhost:3721/users/${args.id}`)
                    .then(resp => resp.data);
            }
        },
        company: {
            type: CompanyType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                // return a promise
                return axios.get(`http://localhost:3721/companies/${args.id}`)
                    .then(resp => resp.data);
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
    age,
    company {
        id
        name
    }

  }
}
*/