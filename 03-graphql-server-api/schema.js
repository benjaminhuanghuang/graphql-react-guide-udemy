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
    // Using => funciton colusure to reslove circular reference
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
        },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
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

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLInt },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, { firstName, age, companyId }) {
                return axios.post('http://localhost:3721/users', { firstName, age, companyId })
                    .then(res => res.data);
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { id }) {
                return axios.delete(`http://localhost:3721/users/${id}`)
                    .then(res => res.data);
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: GraphQLInt },
                companyId: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return axios.patch(`http://localhost:3721/users/${id}`, args)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    mutation,
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
//  nest query
{
	company(id: "1", ){
    id
    name
    users{
      firstName
      company{
        name
      }
    }
  }
}
// Query Fragments: give key to result 
{
    apple: company(id: "1"){
        name
    }
    google: company(id: "2"){
        name
    }
}

//
mutation{
    addUser(firstName: "git", age:33){
        id
        firstName
        age
    }
}
*/