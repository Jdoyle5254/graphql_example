const {gql} = require('apollo-server-express')
const typeDefs = gql `

type User {
    name: String
    age: Int
    email: String
}

type Query {
    getAllUsers: [User]
}

type Mutation {
    createUser(name: String, email: String, age: Int): User
}

`


module.exports = { typeDefs}
