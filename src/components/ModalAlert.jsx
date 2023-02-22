import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../src/styles/ModalAlert.module.css';
import warningImage from '../../src/assets/old-woman.png';
import { Image } from 'react-bootstrap';

function ModalAlert({show,  handleClose, onConfirm, title, message}) {
  return (
    <Modal className={styles.ModalAlert} show={show} onHide={handleClose} onClose={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image className={styles.ModalImage} src={warningImage} fluid />
      {message}
      </Modal.Body>
    <Modal.Footer>
      <Button className={styles.CancelButton} onClick={handleClose}>
        Close
      </Button>
      <Button  className={styles.Button} onClick={onConfirm}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalAlert