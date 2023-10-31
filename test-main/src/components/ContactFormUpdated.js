import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ContactFormNew = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowWarning(false); // Hide the warning if the user starts typing.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      // Show the warning if the email input is empty.
      setShowWarning(true);
    } else {
      // You can perform any necessary form submission logic here

      // After successful form submission, show the modal
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          {showWarning && <div className="text-danger">Email is required.</div>}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#084aa6",
            color: "white",
            borderRadius: "20px",

            // width: "20%",
          }}
          className="my-2"
        >
          Submit
        </Button>
      </Form>

      <Modal centered show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Form Submitted</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <h5 className="p-4" style={{ color: "navy" }}>
            Thank you for your interest in MyPickup! We will mail you the pitch
            deck within 24 business hours.
          </h5>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ContactFormNew;
