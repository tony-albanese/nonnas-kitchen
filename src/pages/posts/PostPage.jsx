import React from 'react'
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

export default function PostPage() {
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
