import React, { useState } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { BooksList, AddBook } from "../index";

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
          className='add-book'
          onClick={() => setShowAddBook(true)}
        >
          Add book
        </Button>
      </Jumbotron>
      <AddBook show={showAddBook} handleClose={() => setShowAddBook(false)} />
      <BooksList />
    </Container>
  );
};

export default App;
