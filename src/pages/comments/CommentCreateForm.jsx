import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
import { axiosResponse } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEdit.module.css";

function CommentCreateForm({postId, setComments, setPost}) {

    const [body, setBody] = useState("")

    const handleChange = (event) => {
        setBody(event.target.value);
    };

    //The handleSubmit is based on the method in the Moments walkthrough.
    //https://github.com/Code-Institute-Solutions/moments/blob/master/src/pages/comments/CommentCreateForm.js
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axiosResponse.post("/comments/", {
            body: body,
            blog_post: postId,
          });

          setComments((prevComments) => ({
            ...prevComments,
            results: [data, ...prevComments.results],
          }));

          setPost((prevPost) => ({
            results: [
              {
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count + 1,
              },
            ],
          }));
          setBody("");
    };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
            as="textarea"
            placeholder='Leave a comment...'
            value={body}
            onChange={handleChange}
            rows={3}
            />
        </Form.Group>
        <div className="d-flex justify-content-end mb-2">
        <Button className={styles.Button} type="submit" disabled={!body.trim()}>
            post
        </Button>
        </div>
    </Form>
  )
}

export default CommentCreateForm