import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const SubmitModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submitted</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your form has been submitted successfully!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubmitModal