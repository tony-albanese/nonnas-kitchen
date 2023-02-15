import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {

  const currentUser = useContext(CurrentUserContext);
  const loggedInNavItems = <>{currentUser?.username}</>
  const loggedOutNavItems = (
    <>
      <NavLink to="/signin" className={styles.NavLink}>
        Sign in
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink}>
        Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand>Nonna's Kitchen</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact to="/" className={styles.NavLink}>
              Home
            </NavLink>
            {currentUser ?loggedInNavItems : loggedOutNavItems}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
