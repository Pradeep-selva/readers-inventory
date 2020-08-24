import React, { useState } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { BooksList, AddBook, AddAuthor } from "../index";

const App = () => {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddAuthor, setShowAddAuthor] = useState(false);

  return (
    <Container>
      <Jumbotron>
        <h1>Readers Inventory</h1>
        <h4>Your book management website!</h4>
        <Button
          variant='outline-primary'
          size='lg'
          className='add-btn'
          onClick={() => setShowAddBook(true)}
        >
          Add book
        </Button>
        <Button
          variant='outline-success'
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
      <BooksList />
    </Container>
  );
};

export default App;
