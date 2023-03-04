import React from "react";
import { Card, Row } from "react-bootstrap";

/*
This component is for displaying an edit and delete icon for a card. The onDelete and onEdit callbacks are to handle the clicks on these
icons respectively.
*/
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
