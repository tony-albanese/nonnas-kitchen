import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAlert({show,  handleClose, onConfirm}) {
  return (
    <Modal show={show} onHide={handleClose} onClose={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        Confirm Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalAlert