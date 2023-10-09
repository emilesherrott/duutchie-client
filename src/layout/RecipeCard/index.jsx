import React from "react";
import { Link } from "react-router-dom";

import "./RecipeCard.css";
import "../layout.css";

const RecipeCard = ({ recipe }) => {
  return (
<Link to={`/${recipe.uriName}`}>
    <article className="recipe-card-article">
      <p>{recipe.name}</p>
      <img src={recipe.imageUri} alt={recipe.name} />
      <div className="recipe-card-div">
        <div className="recipe-card-info">
          <p>Prep Time: {recipe.prepTime}</p>
          <p>Cook Time: {recipe.cookTime}</p>
          <p>Cost: {recipe.cost}</p>
        </div>
        <div className="recipe-card-nation-flag">
          <img src={recipe.nationUri} alt={recipe.nation} />
        </div>
      </div>
    </article>
    </Link>
  );
};

export default RecipeCard;
