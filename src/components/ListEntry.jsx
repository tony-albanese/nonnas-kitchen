import React from "react";
import { Container, Form, FormControl, Row, Col, Image, Button } from "react-bootstrap";

function ListEntry({ fields, setFields, label}) {
  const addInputElement = (event) => {
    let newField = { instruction: "" };
    setFields([...fields, newField]);
  };

  const removeInputElement = (index) => {
    let data = [...fields];
    data.splice(index, 1);
    setFields(data);
  };

  const handleChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  };

  return (
    <>
      <h2>{label}</h2>
      <Form.Group className="input-group-append">
        <Row>
        <p>Add a Field</p>
        <Button variant="primary" onClick={addInputElement}>
          +
        </Button>
        </Row>
      </Form.Group>

      {fields.map((input, index) => {
        return (
          <Row key={index}>
            <Form.Group className="input-group-append">
              <Form.Control
                name="instruction"
                placeholder="add a step"
                value={input.instruction}
                onChange={(event) => handleChange(index, event)}
              />
              <Button
                variant="secondary"
                onClick={(event) => removeInputElement(index)}
              >
                -
              </Button>
            </Form.Group>
          </Row>
        );
      })}
    </>
  );
}

export default ListEntry;
