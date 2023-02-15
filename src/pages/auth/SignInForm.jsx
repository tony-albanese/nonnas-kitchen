import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";

export default function SignInForm() {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  return (
    <Row>
      <Col md={6}>
        <Container>
          <h1>Sign In</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>

          <Form.Text className="text-muted">
            Don't have an account? Sign Up.
          </Form.Text>
        </Container>
      </Col>
    </Row>
  );
}
