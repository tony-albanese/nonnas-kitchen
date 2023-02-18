import React, { useEffect, useState } from 'react'
import {
    Col,
    Row,
    Container,
  } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { axiosRequest } from "../../api/axiosDefaults";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import CommentCreateForm from '../comments/CommentCreateForm';
import BlogPost from './BlogPost';

export default function PostPage() {
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const [post, setPost] = useState({results: []});


  useEffect(()=>{
    const handleMount = async () => {
      try {
        const [{data: post}] = await Promise.all([
          axiosRequest.get(`/posts/${id}`),
        ]);
        setPost({results: [post]});

      } catch (err){
        console.log(err);
      }
    }

    handleMount();
  },[id]
  ) ;

  return (
    <Row className="h-100">
        <Col lg={8}>
            <BlogPost {...post.results[0]} setPosts={setPost} postPage />
            <Container>
                
                {currentUser ? (<CommentCreateForm postId={id}/>) : (<p>Comments Go Here if there are any.</p>)}
                
            </Container>
        </Col>
    </Row>
  )
}
