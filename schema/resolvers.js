const { users } = require('../userData')

const resolvers = {

Query: {
    getAllUsers() {
        return users
    }
},

//args { name: Jen, age: 48, emal: jd@gmail.com}
Mutation: {

    createUser(parent, args) {
        const newUser = args
        users.push(newUser)
        return newUser

    }
      
}



}
module.exports = {resolvers}