import React from "react";
import styles from "../../styles/BlogPost.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Button,
  Image,
  Col,
  Row,
  Container,
  Media,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PostFooterContent from "../../components/PostFooterContent";
import { axiosResponse } from "../../api/axiosDefaults";

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
    is_liked,
    likes_count,
    setPosts
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;

  const categories = {
    anec: "Anecdote",
    tip: "Tip",
    hist: "History",
    fact: "Fun Fact",
    orig: "Origin",
    remin: "Reminiscence",
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosResponse.post("/likes", { post: id });

      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, is_liked: true }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>{categories[category]}</Card.Header>
      <Media className="align-items-center justify-content-between">
        {author}
        <span>{posted_on}</span>
        {is_owner && postPage && "..."}
      </Media>
      <Link to={`/posts/${id}`}>
        <Card.Img variant="top" src={post_image} alt={title} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <PostFooterContent
        isOwner={is_author}
        isLiked={is_liked}
        loggedInUser={currentUser}
        onLike={handleLike}
        likesCount={likes_count}
      />
    </Card>
  );
};

export default BlogPost;
