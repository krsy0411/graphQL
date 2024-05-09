const { gql } = require("apollo-server-express");

// 그래프QL 스키마 언어로, 스키마 구성
module.exports = gql`
    type Note {
        id: ID!
        content: String!
        author: String!
    }

    type Query {
        hello: String
        notes: [Note!]!
        note(id: ID!): Note!
    }
    type Mutation {
        newNote(content: String!): Note!
    }
`;