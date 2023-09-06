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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        getUser(userId: ID!): User
        me: User
    }
   input BookInput {
        authors: [String!]
        description: String
        title: String!
        bookId: String!
        image: String
        link: String
}
    type Mutation {
        login(email:String!, password: String!):Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(_id: ID!,book: BookInput!):User
        removeBook(_id: ID!, deleteBook: String!):User

    }
`

module.exports = typeDefs;