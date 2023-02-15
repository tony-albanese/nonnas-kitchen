import React from "react";
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
  return (
    <Row>
      <Col md={6}>
        <Container>
          <h1>Sign In</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
