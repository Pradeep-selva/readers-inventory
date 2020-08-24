import React, { useState } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { BooksList, AddBook, AddAuthor } from "../index";

const App = () => {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddAuthor, setShowAddAuthor] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);

  return (
    <Container>
      <Jumbotron>
        <h1>Readers Inventory</h1>
        <h4>Your book management website!</h4>
        <Button
          variant='primary'
          size='lg'
          className='add-btn'
          onClick={() => setShowAddBook(true)}
        >
          Add book
        </Button>
        <Button
          variant='success'
          size='lg'
          className='add-btn ml-3'
          onClick={() => setShowAddAuthor(true)}
        >
          Add Author
        </Button>
      </Jumbotron>
      <AddBook show={showAddBook} handleClose={() => setShowAddBook(false)} />
      <AddAuthor
        show={showAddAuthor}
        handleClose={() => setShowAddAuthor(false)}
      />
      {showBookDetails ? (
        <h1>details</h1>
      ) : (
        <BooksList showDetails={() => setShowBookDetails(true)} />
      )}
    </Container>
  );
};

export default App;
