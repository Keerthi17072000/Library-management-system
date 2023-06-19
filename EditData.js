import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const EditData = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.BookName || !user.Category || !user.Price) return;
        props.updateUser(user.BookID, user);
      }}
    >
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Book ID</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              name="BookID"
              value={user.BookID}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              name="BookName"
              value={user.BookName}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              name="Category"
              value={user.Category}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              name="Price"
              value={user.Price}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button className="mt-5" variant="primary" type="submit">
        Update book
      </Button>
      <Button className="mt-5 ms-3" variant="secondary" onClick={() => props.setEditing(false)}>
        Cancel
      </Button>
    </Form>
  );
};

export default EditData;
