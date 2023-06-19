import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const AddData = (props) => {
  const initialFormState = { BookID: "", BookName: "", Category: "", Price: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.BookName || !user.Category || !user.Price || !user.BookID) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Row>
        <Col md={6}>
          <Form.Group controlId="formBookID">
            <Form.Label>Book ID</Form.Label>
            <Form.Control
              type="text"
              name="BookID"
              value={user.BookID}
              placeholder="Enter book ID"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              name="BookName"
              value={user.BookName}
              placeholder="Enter book name"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="Category"
              value={user.Category}
              placeholder="Enter book category"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="Price"
              value={user.Price}
              placeholder="Enter book price"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button className="mt-5" variant="primary" type="submit">
        Upload book
      </Button>
    </Form>
  );
};

export default AddData;
