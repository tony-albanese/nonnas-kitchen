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

export default function PostPage() {

  const {id} = useParams();
  const [blogPost, setBlogPost] = useState({results: []});

  useEffect(()=>{
    const handleMount = async () => {
      try {
        const [{data: post}] = await Promise.all([
          axiosRequest.get(`/posts/${id}`),
        ]);
        setBlogPost({results: [post]});
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
            <p>Post component will go here.</p>
            <Container>
                Comments will go here.
            </Container>
        </Col>
    </Row>
  )
}
