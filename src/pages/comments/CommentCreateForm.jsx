import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
import { axiosResponse } from "../../api/axiosDefaults";

function CommentCreateForm({postId, setComments, setPost}) {

    const [body, setBody] = useState("")

    const handleChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Comment submitted for post with id: ${postId}`);
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
        <Button variant="primary" type="submit" disabled={!body.trim()}>
            post
        </Button>
    </Form>
  )
}

export default CommentCreateForm