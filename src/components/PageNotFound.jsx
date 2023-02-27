import React from "react";
import { Container, Image } from "react-bootstrap";
import Error from "../assets/page-not-found.jpg";
import { NavLink } from "react-router-dom";
import styles from "../styles/PageNotFound.module.css";

function PageNotFound() {
  return (
    <Container className="text-center">
      <Image src={Error} fluid alt="Page not found error."/>
      <NavLink className={styles.NavLink} to="/">
        <p>Take me home!</p>
      </NavLink>
    </Container>
  );
}

export default PageNotFound;
