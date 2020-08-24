import React, { useState } from "react";
import { graphql } from "react-apollo";
import { addAuthorMutation, getAuthorsQuery } from "../../graphql";
import { Modal, Form, Row, Col, Button, Toast } from "react-bootstrap";

const AddAuthor = ({ show, mutate, handleClose }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [toastShow, setToastShow] = useState(false);

  const handleSubmit = () => {
    mutate({
      variables: {
        name,
        age: parseInt(age)
      },
      refetchQueries: [{ query: getAuthorsQuery }]
    });

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
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type='text'
                  placeholder="Enter the Author's name"
                  onChange={(event) => setName(event.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Age
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type='text'
                  placeholder="Enter the Author's age"
                  onChange={(event) => setAge(event.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Add Author
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
        <Toast.Body>Succesfully added the author!</Toast.Body>
      </Toast>
    </>
  );
};

export default graphql(addAuthorMutation)(AddAuthor);
