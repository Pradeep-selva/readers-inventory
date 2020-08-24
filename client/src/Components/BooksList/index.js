import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../graphql";
import { Button, Spinner } from "react-bootstrap";

const BooksList = ({ data, showDetails, setBookID }) => {
  const handleShow = (id) => {
    setBookID(id);
    showDetails();
  };

  return (
    <>
      {data.loading ? (
        <Spinner
          animation='grow'
          variant='light'
          size='lg'
          className='spinner'
        />
      ) : (
        data.books.map((book) => (
          <Button
            variant='outline-light'
            size='lg'
            className='mr-5 mb-5'
            key={book.id}
            onClick={() => handleShow(book.id)}
          >
            {book.name}
          </Button>
        ))
      )}
    </>
  );
};

export default graphql(getBooksQuery)(BooksList);
