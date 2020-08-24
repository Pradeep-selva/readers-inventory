import React, { useState } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { BooksList, AddBook } from "../index";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Jumbotron>
        <h1>Readers Inventory</h1>
        <h4>Your book management website!</h4>
        <Button
          variant='outline-primary'
          className='add-book'
          onClick={() => setShow(true)}
        >
          Add book
        </Button>
      </Jumbotron>
      <AddBook show={show} handleClose={() => setShow(false)} />
      <BooksList />
    </Container>
  );
};

export default App;
