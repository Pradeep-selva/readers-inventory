import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BooksList = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.loading ? (
        <h4>loading books...</h4>
      ) : (
        <ul>
          {data.books.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default graphql(getBooksQuery)(BooksList);
