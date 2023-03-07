//The SignUpForm component will go here.
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button,Col, Row, Image, Alert } from "react-bootstrap";
import axios from "axios";
import styles from "../../styles/AuthenticationForm.module.css";
import SignUpImage from "../../assets/elderly-cooking.jpg";

/*
The code for this component was modeled from the Moments walkthrough on Code Institute.
It has been modified as needed.
https://github.com/Code-Institute-Solutions/moments/blob/master/src/pages/auth/SignUpForm.js
*/

const SignUpForm = () => {
  //store data in variable and use setSignUpData to update state
  //destructure the variables and set the initial value in useState()
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col md={8}>
      <Image src={SignUpImage} fluid alt="a grandmother and child cooking together."/>
      <cite><a target="_target" rel="noreferrer" href="https://www.freepik.com/free-vector/happy-grandma-granddaughter-cooking-together-kitchen-interior-with-utensils-table-grandmother-grandchild-kneading-dough-baking-pie-with-berries-family-relationship_28849871.htm#query=grandmother%20kitchen&position=3&from_view=search&track=ais">Image by studio4rt</a> on Freepik</cite>
      </Col>
      <Col className="my-auto py-2 p-md-2" md={4}>
          <h2 className={styles.Header}>Sign Up</h2>
          <Form className={styles.Authentication} onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button variant="primary" type="submit">
              Sign Up
            </Button>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
  
          <Link className={styles.Link} to="/signin">
            Already have an account? <span className={styles.LinkText}>Sign in</span>
          </Link>
      </Col>
    </Row>
  );
};

export default SignUpForm;
