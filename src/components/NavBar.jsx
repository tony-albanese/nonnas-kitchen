import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/NavBar.module.css";
import axios from "axios";
import { useClickOutsideToggle } from "../hooks/useClickOutsideToggle";

const NavBar = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, burgerIconRef} = useClickOutsideToggle();


  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addBlogPostNavItem = (
    <NavLink className={styles.NavLink} to="/posts/create">
      Add post
    </NavLink>
  );



  const loggedInNavItems = <>
        <NavLink to="/feed" className={styles.NavLink}>
        Feed
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        Sign out
      </NavLink>
      <NavLink to="#" className={styles.NavLink}>
        {currentUser?.username}
      </NavLink>
  </>




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
    <Navbar expanded={expanded} expand="md" fixed="top">
      <Container>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand>Nonna's Kitchen</Navbar.Brand>
        </NavLink>
        {currentUser && addBlogPostNavItem}
        <Navbar.Toggle
        ref={burgerIconRef}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav" 
        />
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
