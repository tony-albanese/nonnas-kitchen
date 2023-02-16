import React from 'react'
import {Form, FormControl} from "react-bootstrap";
const FormSelections = ({controlName, onChangeHandler}) => {

    return (
        <Form.Control as="select" name={controlName} onChange={onChangeHandler}>
       <option value="a">Anecdote</option>
          <option value="b">Tip</option>
          <option value="c">History</option>
          <option value="d">Fun Fact</option>
          <option value="e">Origin</option>
          <option value="f">Reminiscence</option>
        </Form.Control>
    );
};

export default FormSelections;

