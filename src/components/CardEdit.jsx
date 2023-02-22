import React from "react";
import { Card, Row } from "react-bootstrap";

function CardEdit({onDelete, onEdit, showEdit}) {
  return (
    <Card.Body>
      <Row className="d-flex justify-content-end">
        <span onClick={onDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </span>

        {showEdit ? (
        <span onClick={onEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </span> 
        ) : (<></>)}
      </Row>
    </Card.Body>
  );
}

export default CardEdit;
