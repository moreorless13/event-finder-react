import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $username: String!, $password: String!) {
        addUser(email: $email, username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_EVENT = gql`
    mutation saveEvent($eventData: EventInput!) {
        saveEvent(eventData: $eventData) {
            _id
            email
            username
            savedEvents {
                eventId
                eventName
                eventDescription
                startDate
                endDate
                latitude
                longitude
            }
        }
    }
`;

export const REMOVE_EVENT = gql`
    mutation removeEvent($eventId: ID!) {
        removeEvent(eventId: $eventId) {
            _id
            email
            username
            savedEvents {
                eventId
                eventName
                eventDescription
                startDate
                endDate
                latitude
                longitude
            }
        }
    }
`;