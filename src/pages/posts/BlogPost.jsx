import React, {useState} from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Media,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PostFooterContent from "../../components/PostFooterContent";
import CardEdit from "../../components/CardEdit";
import ModalAlert from "../../components/ModalAlert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosResponse } from "../../api/axiosDefaults";
import styles from "../../styles/BlogPost.module.css";


const BlogPost = (props) => {
  const {
    id,
    author,
    title,
    body,
    category,
    posted_on,
    post_image,
    postPage,
    is_liked,
    likes_count,
    comments_count,
    setPosts,
    like_id
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;
  const history = useHistory();

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
    setShow(true);
  };

  const handleEdit = (event) => {
    history.push(`/posts/${id}/edit`);
  };
  
  const handleDelete = async () => {
    try {
      const { data } = await axiosResponse.delete(`/posts/${id}`);
      history.goBack();
    }catch(err){
      console.log(err);
    }
    setShow(false);
  }
  
  const [show, setShow] = useState(false);

  

  return (
    <>
      <Card className="my-4 mx-auto" style={{ width: "75%" }}>
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
          commentsCount={comments_count}
          postId={id}
        />
      </Card>
      <ModalAlert
        show={show}
        handleClose={() => setShow(false)}
        onConfirm={handleDelete}
        title="Nonna Says.."
        message={"Delete post?"}
      />
    </>
  );
};

export default BlogPost;
