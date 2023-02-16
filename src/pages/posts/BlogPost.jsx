import React from "react";
import styles from "../../styles/BlogPost.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Button, Image, Col, Row, Container } from "react-bootstrap";

const BlogPost = (props) => {
  const {
    id,
    author,
    title,
    body,
    category,
    posted_on,
    post_image,
    is_author,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogPost;
