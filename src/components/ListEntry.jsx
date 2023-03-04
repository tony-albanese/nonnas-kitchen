import React from "react";
import { Form, Row} from "react-bootstrap";
import styles from "../styles/ListEntry.module.css";

/*
This component is to enter in a list as part of a form.
The app creates a list of input fields.
*/
function ListEntry({ fields, setFields, label }) {
  const addInputElement = (event) => {
    let newField = { item: "" };
    setFields([...fields, newField]);
  };

  const removeInputElement = (index) => {
    //Check if there is at least one field before deleting it.
    if(fields.length > 1){
        let data = [...fields];
    data.splice(index, 1);
    setFields(data);
    }
  };

  const handleChange = (index, event) => {
    let data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  };

  return (
    <>
      <h3 className={`text-center ${styles.Text}`}>{label}</h3>
      <Form.Group className="input-group-append">
        <Row>
          <p className={`text-center ${styles.Text}`}>Add a Field</p>
          <i onClick={addInputElement} className="fa-solid fa-circle-plus"></i>
        </Row>
      </Form.Group>

      {fields.map((input, index) => {
        return (
          <Row key={index}>
            <Form.Group className="input-group-append">
              <Form.Control
                name="item"
                placeholder="add a step"
                value={input.item}
                onChange={(event) => handleChange(index, event)}
              />

              <i
                className="fa-regular fa-trash-can"
                onClick={(event) => removeInputElement(index)}
              ></i>
            </Form.Group>
          </Row>
        );
      })}
    </>
  );
}

export default ListEntry;
