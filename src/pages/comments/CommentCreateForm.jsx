import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { axiosRequest } from "../../api/axiosDefaults";

function CommentCreateForm({post}) {

    const [body, setBody] = useState("")

    const handleChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();


    };

  return (
    <Form>
        <Form.Group>
            <p>User Profile Image Goes Here</p>
            <Form.Control 
            as="textarea"
            placeholder='Leave a comment...'
            value={body}
            onChange={handleChange}
            rows={3}
            />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!body.trim()}>
            post
        </Button>
    </Form>
  )
}

export default CommentCreateForm