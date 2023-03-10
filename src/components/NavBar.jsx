import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import { useClickOutsideToggle } from "../hooks/useClickOutsideToggle";
import nonna from "../assets/old-woman.png";
import styles from "../styles/NavBar.module.css";
import axios from "axios";
import { removeTokenTimestamp } from "../utils/utils";

/*
The code for the NavBar component is based on the NavBar component from the Moments walkthrough.
https://github.com/Code-Institute-Solutions/moments/blob/master/src/components/NavBar.js
*/
const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, burgerIconRef } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addBlogPostNavItem = (
    <>
      <NavLink className={styles.NavLink} to="/posts/create">
      Add Post
      </NavLink>

      <NavLink className={styles.NavLink} to="/recipes/create">
      Add Recipe
      </NavLink>
    </>
  );

  const loggedInNavItems = (
    <>
    {addBlogPostNavItem}
      <NavLink to="/liked" className={styles.NavLink}>
      Likes
      </NavLink>

      <span to="#" className={styles.NavTextItem}>
      {currentUser?.username}
      </span>

      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
      <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </NavLink>
    </>
  );

  const loggedOutNavItems = (
    <>
      <NavLink to="/signin" className={styles.NavLink}>
      Sign In
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink}>
     Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      className={styles.NavBar}
      expanded={expanded}
      expand="lg"
      fixed="top"
    >
      <Container>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand>
            <img src={nonna} alt="nonna logo" height="45" />
          </Navbar.Brand>
          <span className={styles.BrandText}>Nonna's Kitchen</span>
        </NavLink>
        <Navbar.Toggle
          ref={burgerIconRef}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact to="/" className={styles.NavLink}>
           Posts
            </NavLink>
            <NavLink exact to="/recipes" className={styles.NavLink}>
            Recipes
            </NavLink>
            {currentUser ? loggedInNavItems : loggedOutNavItems}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
