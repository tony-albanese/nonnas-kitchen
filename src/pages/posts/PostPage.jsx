import React, { useEffect, useState } from 'react'
import {
    Form,
    Button,
    Image,
    Col,
    Row,
    Container,
    Alert,
    FormText,
    FormControl,
  } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { axiosRequest } from "../../api/axiosDefaults";
import BlogPost from './BlogPost';

export default function PostPage() {

  const {id} = useParams();
  const [post, setPost] = useState({results: []});

  useEffect(()=>{
    const handleMount = async () => {
      try {
        const [{data: post}] = await Promise.all([
          axiosRequest.get(`/posts/${id}`),
        ]);
        setPost({results: [post]});
        console.log(post);

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
                Comments will go here.
            </Container>
        </Col>
    </Row>
  )
}
