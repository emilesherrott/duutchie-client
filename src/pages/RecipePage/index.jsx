import { useParams, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";

import "./RecipePage.css";
import "../pages.css";

const RecipePage = () => {
  const { uriName } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    console.log("hit");
    const fetchRecipe = async () => {
      const { data } = await axios.get(`http://35.178.184.84:3000/${uriName}`);
      data.success ? setRecipe(data.recipe) : setRecipe();
    };
    fetchRecipe();
  }, []);


  return (
    <div className="recipe-page-container">
      <div className="recipe-page-subcontainer">
        <section className="recipe-page-head-section recipe-page-description">
          <div className="recipe-page-title">
            <h1>{recipe.name}</h1>
            <div className="recipe-page-info">
              <p>Prep Time: {recipe.prepTime}</p>
              <p>Cook Time: {recipe.cookTime}</p>
            </div>
          </div>
          {recipe.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
        <div className="recipe-page-image-and-ingredients">
          <section className="recipe-page-image-section">
            <img src={recipe.imageUri} alt={recipe.name} className="recipe-page-image" />
          </section>
          <section className="recipe-page-ingredients-section">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.index.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
