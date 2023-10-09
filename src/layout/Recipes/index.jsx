import React from 'react'
import RecipeCard from '../RecipeCard'

import "./Recipes.css"
import "../layout.css"

const Recipes = ({ recipeData }) => {

  return (
    <>
    {recipeData.map((recipe) => <RecipeCard recipe={recipe} key={recipe["_id"]} /> )}
    </>
  )
}

export default Recipes