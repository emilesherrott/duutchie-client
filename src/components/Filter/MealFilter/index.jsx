import React from 'react'

import "./MealFilter.css"
import "../filter.css"

const MealFilter = ({ mealFilterObject, setMealFilterObject}) => {

  const handleChange = (e) => {
    if (mealFilterObject["meal_all"] && e.target.value !== "meal_all") {
      // 'All' option is true && selected checkbox isn't 'All'
      // Set's all to false && turns the selected checkbox true
      let updatedMealFilterObject = {
        breakfast: false,
        lunch: false,
        dinner: false,
        snacks: false,
        drinks: false,
        meal_all: false,
      };
      updatedMealFilterObject[e.target.value] = !updatedMealFilterObject[e.target.value];
      setMealFilterObject(updatedMealFilterObject);
    } else if (mealFilterObject["meal_all"] && e.target.value === "meal_all") {
      // 'All' option is true && selected checkbox is 'All'
      //   Do nothing, can't deselect so nothing is true
    } else if (mealFilterObject[e.target.value] && Object.keys(mealFilterObject).every((key) => key === e.target.value || mealFilterObject[key] === false)) {
      //  Selected item is true && every other option is false
      // Do nothing, can't deselect so nothing is true
    } else if (!mealFilterObject[e.target.value] && e.target.value !== "meal_all") {
      // Selected item is false && selected item isn't 'All'
      // Toggle the selected item to true
      let updatedMealFilterObject = { ...mealFilterObject };
      updatedMealFilterObject[e.target.value] = !updatedMealFilterObject[e.target.value];
      setMealFilterObject(updatedMealFilterObject);
    } else if (
      // Selected item is true && other items are mixed between true and false
      // Toggle the selected item to false
      mealFilterObject[e.target.value] &&
      !Object.keys(mealFilterObject).every((key) => mealFilterObject[key] === false) &&
      !Object.keys(mealFilterObject).every((key) => mealFilterObject[key] === true)
    ) {
      let updatedMealFilterObject = { ...mealFilterObject };
      updatedMealFilterObject[e.target.value] = !updatedMealFilterObject[e.target.value];
      setMealFilterObject(updatedMealFilterObject);
    } else if (e.target.value === "meal_all" && !mealFilterObject["meal_all"]) {
        // Selected item is 'All' && 'All' is currently false
        // Toggle every item to false exepct 'All'
      let updatedMealFilterObject = {
        breakfast: false,
        lunch: false,
        dinner: false,
        snacks: false,
        drinks: false,
        meal_all: true,
      };
      setMealFilterObject(updatedMealFilterObject);
    }
  };

  return (
    <form className="filter-form">
      <section id="filter-section-meal">
        <div>Meal Type</div>
        <label htmlFor="filter-breakfast">Breakfast</label>
        <input id="filter-breakfast" type="checkbox" name="meal" value="breakfast" onChange={handleChange} checked={mealFilterObject["breakfast"]} />

        <label htmlFor="filter-lunch">Lunch</label>
        <input id="filter-lunch" type="checkbox" name="meal" value="lunch" onChange={handleChange} checked={mealFilterObject["lunch"]} />

        <label htmlFor="filter-dinner">Dinner</label>
        <input id="filter-dinner" type="checkbox" name="meal" value="dinner" onChange={handleChange} checked={mealFilterObject["dinner"]} />

        <label htmlFor="filter-snacks">Snacks</label>
        <input id="filter-snacks" type="checkbox" name="meal" value="snacks" onChange={handleChange} checked={mealFilterObject["snacks"]} />

        <label htmlFor="filter-drinks">Drinks</label>
        <input id="filter-drinks" type="checkbox" name="meal" value="drinks" onChange={handleChange} checked={mealFilterObject["drinks"]} />

        <label htmlFor="filter-meal_all">All</label>
        <input id="filter-meal_all" type="checkbox" name="meal" value="meal_all" onChange={handleChange} checked={mealFilterObject["meal_all"]} />
      </section>
    </form>
  )
}

export default MealFilter