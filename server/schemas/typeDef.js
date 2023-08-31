const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Auth{
        token
        user: User
    }

    type Query {
        getUser(userId: ID!): User
    }

    type Mutation {
        

    }
`

module.exports = typeDefs;