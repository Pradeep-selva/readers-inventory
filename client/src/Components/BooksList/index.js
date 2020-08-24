import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../graphql";

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
