import React from 'react'
import {
    Col,
    Row,
    Container,
  } from "react-bootstrap";
function PostsPage(props) {
  return (
    <Row className='h100'>
    <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>List of posts here</p>
        <p>{props.message}</p>
      </Col>

    </Row>
  )
}

export default PostsPage