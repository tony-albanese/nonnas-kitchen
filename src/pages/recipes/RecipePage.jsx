import React from 'react'
import { useParams } from "react-router-dom";

function RecipePage() {
  const { id } = useParams();
  return (
    <>
    <h1>Recipe Page</h1>
    <p>For the details of a single recipe id: {id}</p>
    </>
  )
}

export default RecipePage