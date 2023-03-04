import React from "react";
import { Container, Image } from "react-bootstrap";
import Error from "../assets/page-not-found.jpg";
import { NavLink } from "react-router-dom";
import styles from "../styles/PageNotFound.module.css";

/*
This is the component that gets rendered when the user enters a url that the Router object cannot match.
*/
function PageNotFound() {
  return (
    <Container className="text-center">
      <Image src={Error} fluid alt="Page not found error."/>
      <NavLink className={styles.NavLink} to="/">
        <p>Take me home!</p>
      </NavLink>
      <cite><a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_21586054.htm#query=404%20page&position=3&from_view=search&track=sph">Image by jcomp</a> on Freepik</cite>
    </Container>
  );
}

export default PageNotFound;
