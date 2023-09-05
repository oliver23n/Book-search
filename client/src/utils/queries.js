import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      username
      savedBooks{
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks{
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`