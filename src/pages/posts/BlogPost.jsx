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
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;

  const categories = [
    { anec: "Anecdote" },
    { tip: "Tip" },
    { hist: "History" },
    { fact: "Fun Fact" },
    { orig: "Origin" },
    { remin: "Reminiscence" },
  ];


  return (
    <Card style={{ width: "18rem" }}>
        <Card.Header>
            First Header
        </Card.Header>
        <Card.Header>
            {author}
            <span>{posted_on}</span>
            {is_owner && postPage  && "   ..."}
        </Card.Header>
      <Card.Img variant="top" src={post_image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {body}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Some footer text.</Card.Footer>
    </Card>
  );
};

export default BlogPost;
