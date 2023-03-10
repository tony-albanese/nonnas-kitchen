import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../src/styles/ModalAlert.module.css';
import warningImage from '../../src/assets/old-woman.png';
import { Image } from 'react-bootstrap';

/*
This component is for displaying a modal alert dialog to the user when a delete operation is about to occur. The show prop is to control whether the alert is visible. The
onConfirm and handleClose callbacs are passed in to determine what happens when the user presses the Delete button and the Close button.
*/
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