import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

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

export const SAVE_BOOK = gql`
mutation saveBook($id: ID!,$book: BookInput!){
  saveBook(_id: $id,book: $book){
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
}`

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!,$deleteBook: String!) {
    removeBook(_id: $id, deleteBook: $deleteBook) {
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
