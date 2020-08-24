import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../graphql";
import { Button } from "react-bootstrap";

const BooksList = ({ data, showDetails }) => {
  return (
    <>
      {data.loading ? (
        <h4>loading books...</h4>
      ) : (
        data.books.map((book) => (
          <Button
            variant='outline-light'
            size='lg'
            className='mr-5 mb-5'
            key={book.id}
            onClick={showDetails}
          >
            {book.name}
          </Button>
        ))
      )}
    </>
  );
};

export default graphql(getBooksQuery)(BooksList);
