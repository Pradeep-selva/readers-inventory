import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { BooksList } from "../index";

const App = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Readers Inventory</h1>
      </Jumbotron>
      <BooksList />
    </Container>
  );
};

export default App;
