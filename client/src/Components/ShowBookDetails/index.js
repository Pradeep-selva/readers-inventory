import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../../graphql";
import { Button, Container, Jumbotron, ListGroup } from "react-bootstrap";

const ShowBookDetails = ({ data, goBack }) => {
  const { book } = data;
  console.log(book);

  return (
    <>
      {data.loading ? (
        <h4 className='text-light'>loading book details...</h4>
      ) : (
        <Container className='text-light'>
          <h1>{book.name}</h1>
          <h3>
            <em>{book.genre}</em>
          </h3>
          <h5>
            Written by {book.author.name}, age {book.author.age}
          </h5>
          <br />
          {book.author.books.length > 1 ? (
            <Jumbotron style={{ background: "#403434" }}>
              <h2>Other works from the author-</h2>
              {
                <ListGroup>
                  {book.author.books.map((book) => (
                    <ListGroup.Item style={{ background: "#211f1f" }}>
                      {book.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              }
            </Jumbotron>
          ) : (
            <h6>
              <em>No other works of this author has been added yet.</em>
            </h6>
          )}
          <Button variant='light' size='lg' block onClick={goBack}>
            Go back
          </Button>
        </Container>
      )}
    </>
  );
};

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookID
      }
    };
  }
})(ShowBookDetails);
