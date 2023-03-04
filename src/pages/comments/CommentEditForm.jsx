import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
import { axiosResponse } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEdit.module.css";

function CommentEditForm({id, body, setComments, setShowCommentEditForm}) {

   const [formBody, setFormBody] = useState(body);

    const handleChange = (event) => {
        setFormBody(event.target.value);
    };

    //The handleSubmit is based on the method in the Moments walkthrough.
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
    <Form 
    className={styles.CommentEditForm}
    onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
            as="textarea"
            placeholder='Leave a comment...'
            value={formBody}
            onChange={handleChange}
            rows={3}
            />
        </Form.Group>
        <div className="d-flex justify-content-center mb-2">
        <Button className={styles.CancelButton} onClick={() => setShowCommentEditForm(false)}>cancel</Button>
        <Button className={styles.SaveCommentButton} type="submit" disabled={!body.trim()}>
            save
        </Button>
        </div>
    </Form>
  )
}

export default CommentEditForm