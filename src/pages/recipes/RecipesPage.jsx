import React from 'react'
import { NavLink } from "react-router-dom";
import styles from '../../styles/RecipesPage.module.css';
import {useCurrentUser} from "../../contexts/CurrentUserContext";

function RecipesPage() {

  const currentUser = useCurrentUser();
  return (
    <>
      <h1>Recipes Page</h1>
      <p>Display all the recipes.</p>

      {currentUser ? (
        <NavLink to="/recipes/create">
        <div className={styles.ButtonContainer}>
          <div className={`${styles.Button} ${styles.IconButton}`}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </NavLink>

      ) : (<></>)}

    </>
  );
}

export default RecipesPage