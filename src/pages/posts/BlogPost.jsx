import React, {useState} from "react";
import styles from "../../styles/BlogPost.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Media,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PostFooterContent from "../../components/PostFooterContent";
import { axiosResponse } from "../../api/axiosDefaults";
import CardEdit from "../../components/CardEdit";
import ModalAlert from "../../components/ModalAlert";

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
    setPosts,
    like_id
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
      console.log(`id: ${id}`);
      const { data } = await axiosResponse.post("/likes/", { blog_post: id});
    
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

  const handleUnlike = async () => {
    try {

      const { data } = await axiosResponse.delete(`/likes/${like_id}`);
    
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, is_liked: false }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  
  };

  const showConfirmDeleteModal = (event) => {
    console.log("Ask for confirmation.");
    setShow(true);
  };

  const handleEdit = (event) => {
    console.log("edit icon clicked");
  };
  
  const handleDelete = () => {
    console.log("Now delete the post.")
    setShow(false);
  }
  
  const [show, setShow] = useState(false);

  

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Header>{categories[category]}</Card.Header>
        <Media className="align-items-center justify-content-between">
          {author}
          <span>{posted_on}</span>
        </Media>
        <Link to={`/posts/${id}`}>
          <Card.Img variant="top" src={post_image} alt={title} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        {is_owner && postPage && (
          <CardEdit onDelete={showConfirmDeleteModal} onEdit={handleEdit} />
        )}
        <PostFooterContent
          isOwner={is_owner}
          isLiked={is_liked}
          loggedInUser={currentUser}
          onLike={handleLike}
          onUnlike={handleUnlike}
          likesCount={likes_count}
        />
      </Card>
      <ModalAlert
        show={show}
        handleClose={() => setShow(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default BlogPost;
