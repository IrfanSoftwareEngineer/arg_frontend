// components/AlertModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertModal = ({ show, onHide, message, name }) => {
  return (
    <Modal show={show} onHide={onHide}>


      <Modal.Header closeButton>

        <Modal.Title>Form Submitted Successfully</Modal.Title>

      </Modal.Header>


      <Modal.Body>
        <h1>Thanks {name}</h1>
        <p>{message}</p>
      </Modal.Body>



      <Modal.Footer>

        <Button variant="primary" onClick={onHide}>
          OK
        </Button>

      </Modal.Footer>



    </Modal>
  );
};

export default AlertModal;
