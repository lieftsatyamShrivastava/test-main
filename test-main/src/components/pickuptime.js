import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const PickupReturnTime = () => {
  return (
    <Container className="my-4">
      {/* <h1>Cab Service App</h1> */}
      <Row>
        <Col xs={6} md={3}>
          <Form.Group controlId="pickupTime">
            <Form.Label style={{ fontWeight: "bold" }}>Pickup Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
        </Col>
        <Col xs={6} md={3}>
          <Form.Group controlId="returnTime">
            <Form.Label style={{ fontWeight: "bold" }}>Return Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default PickupReturnTime;
