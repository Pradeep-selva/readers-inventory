import { gql } from "apollo-boost";

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        age
        id
        books {
          name
          id
        }
      }
    }
  }
`;
