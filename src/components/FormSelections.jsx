import React from "react";
import { Form } from "react-bootstrap";

/*
This component is for displaying a list of options and their values in a dropdown menu for a form. 
In the app, the list is list of JSON objects so the Object class methods are used to extract the key
value pairs for the list.
*/

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
