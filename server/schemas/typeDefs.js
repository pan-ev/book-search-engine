const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Query {
        me: User
    }

    type Mutation {
        login: Auth
        
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

`;

module.exports = typeDefs;
