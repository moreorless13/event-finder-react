import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
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