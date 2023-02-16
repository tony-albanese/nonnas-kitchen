import React, { useState } from 'react'
import {
    Form,
    Button,
    Image,
    Col,
    Row,
    Container,
    Alert,
    FormText,
  } from "react-bootstrap";

function BlogPostCreateForm() {

const [errors, setErrors] = useState();
const formFields = (
    <div>Form fields will go here.</div>
)

  return (
    <Form>
        <Row>
            <Col>
            <Container>
                <Form.Group>
                    <Form.Label>
                        
                    </Form.Label>
                </Form.Group>
                <div className="d-md-none">{formFields}</div>
            </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container>{formFields}</Container>
        </Col>
        </Row>
    </Form>
  )
}

export default BlogPostCreateForm;
