import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../../graphql";
import { Modal, Form, Row, Col, Button, Toast } from "react-bootstrap";

const AddBook = ({ show, data, handleClose }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorID, setAuthorID] = useState("");
  const [toastShow, setToastShow] = useState(false);

  const handleSubmit = () => {
    const fields = {
      name,
      genre,
      authorID
    };

    console.log(fields);
    handleClose();
    setToastShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId='formHorizontalEmail'>
              <Form.Label column sm={2}>
                Title
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type='text'
                  placeholder="Enter the book's title"
                  onChange={(event) => setName(event.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Genre
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type='text'
                  placeholder="Enter the book's genre"
                  onChange={(event) => setGenre(event.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Author
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as='select'
                  onChange={(event) => setAuthorID(event.target.value)}
                >
                  <option>Select an author...</option>
                  {!data.loading &&
                    data.authors.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.name}
                      </option>
                    ))}
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Add book
          </Button>
        </Modal.Footer>
      </Modal>

      <Toast
        onClose={() => setToastShow(false)}
        show={toastShow}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: 0,
          left: "45vw"
        }}
      >
        <Toast.Body>Succesfully added your book!</Toast.Body>
      </Toast>
    </>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
