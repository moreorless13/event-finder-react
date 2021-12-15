const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date

    type User {
        _id: ID!
        email: String!
        username: String
        eventCount: Int
        savedEvents: [Event]
    }

    type Event {
        eventId: ID!
        eventName: String!
        eventDescription: String
        startDate: String!
        endDate: String
        latitude: String
        longitude: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input EventInput {
        eventId: String!
        eventName: String!
        eventDescription: String
        startDate: String!
        endDate: String
        latitude: String!
        longitude: String!
    }

    type Query {
        users: [User]!
        user(profileId: ID!): User
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, username: String!,  password: String!): Auth
        saveEvent(eventData: EventInput!): User
        removeEvent(eventId: ID!): User
    }
`;

module.exports = typeDefs;