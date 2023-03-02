import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  Button,
  Col,
  Row,
  Alert,
  Image,
} from "react-bootstrap";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import axios from "axios";
import SignInImage from "../../assets/grandmother-child-cooking.jpg";
import styles from "../../styles/AuthenticationForm.module.css";
import { setTokenTimestamp } from "../../utils/utils";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Row className="d-flex align-items-center mt-5">
      <Col md={8}>
        <Image
          src={SignInImage}
          fluid
          alt="a grandmother and child cooking together."
        />
        <cite>
          Image by{" "}
          <a
          rel="noreferrer"
            target="_blank"
            href="https://www.freepik.com/free-vector/flat-grandparents-day-illustration-with-grandmother-grandchild_28148596.htm#query=grandmother%20kitchen&position=17&from_view=search&track=ais"
          >
            Freepik
          </a>
        </cite>
      </Col>
      <Col md={4}>
        <h2 className={styles.Header}>Sign In</h2>
        <Form className={styles.Authentication} onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>

          {errors.username?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Button variant="primary" type="submit">
            Sign In
          </Button>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">
              {message}
            </Alert>
          ))}
        </Form>
        <Link className={styles.Link} to="/signup">
          Don't have an account?{" "}
          <span className={styles.LinkText}>Sign Up</span>
        </Link>
      </Col>
    </Row>
  );
}

export default SignInForm;
