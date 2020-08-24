import { gql } from "apollo-boost";

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorID: String!) {
    addBook(name: $name, genre: $genre, authorID: $authorID) {
      name
      id
    }
  }
`;
