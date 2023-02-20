import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
import { axiosResponse } from "../../api/axiosDefaults";

function CommentEditForm({id, body, setComments, setShowCommentEditForm}) {

   const [formBody, setFormBody] = useState(body);

    const handleChange = (event) => {
        setFormBody(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axiosResponse.put(`/comments/${id}/`, {
            body: formBody.trim(),
          });
       
          setComments((prevComments) => ({
            ...prevComments,
            results: prevComments.results.map((comment) => {
              return comment.id === id
                ? {
                    ...comment,
                    body: formBody.trim(),
                  }
                : comment;
            }),
          }));
          setShowCommentEditForm(false);
      
    };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
            as="textarea"
            placeholder='Leave a comment...'
            value={formBody}
            onChange={handleChange}
            rows={3}
            />
        </Form.Group>
        <Button variant="secondary" onClick={() => setShowCommentEditForm(false)}>cancel</Button>
        <Button variant="primary" type="submit" disabled={!body.trim()}>
            save
        </Button>
    </Form>
  )
}

export default CommentEditForm