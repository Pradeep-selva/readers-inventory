import { gql } from "apollo-boost";

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorID: String!) {
    addBook(name: $name, genre: $genre, authorID: $authorID) {
      name
      id
    }
  }
`;

export const addAuthorMutation = gql`
  mutation($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      id
    }
  }
`;
