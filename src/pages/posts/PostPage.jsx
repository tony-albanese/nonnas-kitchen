import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosRequest } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import BlogPost from "./BlogPost";

export default function PostPage() {
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });

  const profile_image = currentUser?.profile_image;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosRequest.get(`/posts/${id}`),
          axiosRequest.get(`/comments/?blog_post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col lg={8}>
        <BlogPost {...post.results[0]} setPosts={setPost} postPage />
        <Container>
          {currentUser ? (
            <CommentCreateForm
              postId={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setPost={setPost}
                setComments={setComments}
              />
            ))
          ) : (
            <span>No comments to display.</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}
