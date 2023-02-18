import React from "react";
import { Form } from "react-bootstrap";


const FormSelections = ({ controlName, onChangeHandler, options }) => {

  return (
    <Form.Control as="select" name={controlName} onChange={onChangeHandler}>
        {
    options.map((obj)=>{
        let databaseValue = Object.keys(obj)[0];
        let friendlyValue = obj[databaseValue];
        return <option key={databaseValue} value={databaseValue}>{friendlyValue}</option>
    })}

    </Form.Control>
  );
};

export default FormSelections;
