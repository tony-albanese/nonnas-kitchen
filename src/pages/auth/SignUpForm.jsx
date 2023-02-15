//The SignUpForm component will go here.
import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container>
          <h1>Sign Up</h1>
          {/* add your form here */}
        </Container>
        <Container className={`mt-3`}>
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
