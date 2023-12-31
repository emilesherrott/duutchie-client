import { React, useState, useEffect } from "react";
import axios from "axios"

import { Search, filter } from "../../components";
import { Recipes } from "../../layout";


import "./Home.css";
import "../pages.css";

const Home = () => {
  const [search, setSearch] = useState();
  const [filterToggle, setFilterToggle] = useState(false);

  const handleClick = () => {
    setFilterToggle((prevState) => !prevState);
  };

  
  const [regionFilterObject, setRegionFilterObject] = useState({
    carribean: false,
    latin_american: false,
    southern_states: false,
    west_african: false,
    east_african: false,
    central_african: false,
    south_african: false,
    region_all: true,
  });

  const [mealFilterObject, setMealFilterObject] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    dessert: false,
    snacks: false,
    drinks: false,
    meal_all: true
  })

  const [prepTimeFilterObject, setPrepTimeFilterObject] = useState({
    "0-20": false,
    "21-40": false,
    "41+": false,
    "prep-time-all": true
  })

  const [costFilterObject, setCostFilterObject] = useState({
    "£": false,
    "££": false,
    "£££": false,
    "cost-all": true
  })

  const [dietryFilterObject, setDietryFilterObject] = useState({
    "vegetarian": false,
    "vegan": false,
    "dietry-all": true

  })

  const [cookTimeFilterObject, setCookTimeFilterObject] = useState({
    "0-40": false,
    "41-80": false,
    "81+": false, 
    "cook-time-all": true
  })

  const [recipeData, setRecipeData] = useState([])

  useEffect(() => {
    console.log("hit")
      const fetchRecipes = async () => {
        const { data } = await axios.get("http://35.178.184.84:3000/")
        data.success ? setRecipeData(data.recipes) : setRecipeData([])
      }
      fetchRecipes()
  }, [])


  return (
    <div className="home-container">
      <section className="home-head-section">
        <h1>Duutchie</h1>
        <Search setSearch={setSearch} />
        <div onClick={handleClick} className="home-filter-button">
          Filter
        </div>
        {filterToggle ? (
          <section id="filter">
            <filter.RegionFilter regionFilterObject={regionFilterObject} setRegionFilterObject={setRegionFilterObject} />
            <filter.MealFilter mealFilterObject={mealFilterObject} setMealFilterObject={setMealFilterObject} />
            <filter.PrepTimeFilter prepTimeFilterObject={prepTimeFilterObject} setPrepTimeFilterObject={setPrepTimeFilterObject} />
            <filter.CookTimeFilter cookTimeFilterObject={cookTimeFilterObject} setCookTimeFilterObject={setCookTimeFilterObject} />
            <filter.CostFilter costFilterObject={costFilterObject} setCostFilterObject={setCostFilterObject} />
            <filter.DietryFilter dietryFilterObject={dietryFilterObject} setDietryFilterObject={setDietryFilterObject} />
          </section>
        ) : (
          <></>
        )}
        <section id="home-recipies">
          <Recipes recipeData={recipeData} />
        </section>
      </section>
    </div>
  );
};

export default Home;
