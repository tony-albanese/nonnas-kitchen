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

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, burgerIconRef } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addBlogPostNavItem = (
    <>
      <NavLink className={styles.NavLink} to="/posts/create">
      <i className="fa-solid fa-plus"></i> Add post
      </NavLink>
      <NavLink className={styles.NavLink} to="#">
      <i className="fa-solid fa-plus"></i> Add Recipe
      </NavLink>
    </>
  );

  const loggedInNavItems = (
    <>
    {addBlogPostNavItem}
      <NavLink to="/liked" className={styles.NavLink}>
      <i className="fa-solid fa-heart"></i> Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
      <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
      </NavLink>
      <span to="#" className={styles.NavTextItem}>
      <i className="fa-regular fa-user"></i> {currentUser?.username}
      </span>
    </>
  );

  const loggedOutNavItems = (
    <>
      <NavLink to="/signin" className={styles.NavLink}>
      <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink}>
      <i className="fa-solid fa-user-plus"></i> Sign up
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
            <i className="fa-solid fa-house"></i> Home
            </NavLink>
            {currentUser ? loggedInNavItems : loggedOutNavItems}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
