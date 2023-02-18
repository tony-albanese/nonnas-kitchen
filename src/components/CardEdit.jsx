import React from "react";
import { Card, Row } from "react-bootstrap";

function CardEdit({onDelete, onEdit}) {
  return (
    <Card.Body>
      <Row>
        <span onClick={onDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </span>

        <span onClick={onEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </span>
      </Row>
    </Card.Body>
  );
}

export default CardEdit;
