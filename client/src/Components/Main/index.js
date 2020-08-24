import React, { useState } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { BooksList, AddBook, AddAuthor, ShowBookDetails } from "../index";

const App = () => {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddAuthor, setShowAddAuthor] = useState(false);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [bookID, setBookID] = useState(0);

  return (
    <Container>
      <Jumbotron>
        <h1>Readers Inventory</h1>
        <h4>Your book management website!</h4>
        <Button
          variant='primary'
          size='lg'
          className='mt-5'
          onClick={() => setShowAddBook(true)}
        >
          Add book
        </Button>
        <Button
          variant='success'
          size='lg'
          className='mt-5 ml-3'
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
        <ShowBookDetails
          bookID={bookID}
          goBack={() => setShowBookDetails(false)}
        />
      ) : (
        <BooksList
          showDetails={() => setShowBookDetails(true)}
          setBookID={(id) => setBookID(id)}
        />
      )}
    </Container>
  );
};

export default App;
