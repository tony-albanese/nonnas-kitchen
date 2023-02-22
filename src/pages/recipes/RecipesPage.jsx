import React from 'react'
import { NavLink } from "react-router-dom";

function RecipesPage() {
  return (
    <>
    <h1>Recipes Page</h1>
    <p>Display all the recipes.</p>

    <NavLink to="/recipes/create">
    <i class="fa-solid fa-plus"></i>
    </NavLink>
    </>
  )
}

export default RecipesPage