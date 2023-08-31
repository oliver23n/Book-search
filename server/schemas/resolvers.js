const {User, Book} = require('../models');

const resolvers = {

    Query: {
        getUser: async (parent, userId) =>{
            
            return User.findOne({_id: userId});
        }
    },

    Mutation: {
        
    }

}