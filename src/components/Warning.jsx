import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../src/styles/ModalAlert.module.css';
import warningImage from '../../src/assets/old-woman.png';
import { Image } from 'react-bootstrap';

function Warning({show,  handleClose, title, message}) {
  return (
    <Modal className={styles.ModalAlert} show={show} onHide={handleClose} onClose={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
        <Col md={4} className="d-none d-sm-block">
        <Image className={styles.ModalImage} src={warningImage} fluid />
        </Col>
        <Col md={8}>
      {message}
      </Col>
        </Row>
  
      </Modal.Body>
    <Modal.Footer>
      <Button className={styles.CancelButton} onClick={handleClose}>
        OK
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Warning