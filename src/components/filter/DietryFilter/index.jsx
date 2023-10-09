import React from "react";

import "./DietryFilter.css";
import "../filter.css";

const DietryFilter = ({ dietryFilterObject, setDietryFilterObject }) => {
  const handleChange = (e) => {
    if (dietryFilterObject["dietry-all"] && e.target.value !== "dietry-all" && e.target.value === "vegan") {
      // 'All' option is true && selected checkbox isn't 'All'
      // Set's all to false && turns the selected checkbox true
      let updatedDietryFilterObject = {
        vegetarian: true,
        vegan: true,
        "dietry-all": false,
      };
      setDietryFilterObject(updatedDietryFilterObject);
    } else if (dietryFilterObject["dietry-all"] && e.target.value !== "dietry-all") {
      // 'All' option is true && selected checkbox isn't 'All'
      // Set's all to false && turns the selected checkbox true
      let updatedDietryFilterObject = {
        vegetarian: false,
        vegan: false,
        "dietry-all": false,
      };
      updatedDietryFilterObject[e.target.value] = !updatedDietryFilterObject[e.target.value];
      setDietryFilterObject(updatedDietryFilterObject);
    } else if (dietryFilterObject["dietry-all"] && e.target.value === "dietry-all") {
      // 'All' option is true && selected checkbox is 'All'
      //   Do nothing, can't deselect so nothing is true
    } else if (
      dietryFilterObject[e.target.value] &&
      Object.keys(dietryFilterObject).every((key) => key === e.target.value || dietryFilterObject[key] === false)
    ) {
      //  Selected item is true && every other option is false
      // Do nothing, can't deselect so nothing is true
    } else if (!dietryFilterObject[e.target.value] && e.target.value !== "dietry-all") {
      // Selected item is false && selected item isn't 'All'
      // Toggle the selected item to true
      let updatedDietryFilterObject = { ...dietryFilterObject };
      updatedDietryFilterObject[e.target.value] = !updatedDietryFilterObject[e.target.value];
      setDietryFilterObject(updatedDietryFilterObject);
    } else if (
      // Selected item is true && other items are mixed between true and false
      // Toggle the selected item to false
      dietryFilterObject[e.target.value] &&
      !Object.keys(dietryFilterObject).every((key) => dietryFilterObject[key] === false) &&
      !Object.keys(dietryFilterObject).every((key) => dietryFilterObject[key] === true)
    ) {
      let updatedDietryFilterObject = { ...dietryFilterObject };
      updatedDietryFilterObject[e.target.value] = !updatedDietryFilterObject[e.target.value];
      setDietryFilterObject(updatedDietryFilterObject);
    } else if (e.target.value === "dietry-all" && !dietryFilterObject["dietry-all"]) {
      // Selected item is 'All' && 'All' is currently false
      // Toggle every item to false exepct 'All'
      let updatedDietryFilterObject = {
        vegetarian: false,
        vegan: false,
        "dietry-all": true,
      };
      setDietryFilterObject(updatedDietryFilterObject);
    }
  };
  return (
    <form className="filter-form">
      <div>Dietry Options</div>
      <section id="filter-section-dietry">
        <article className="filter-label-input-pair">
          <label htmlFor="filter-vegan">Vegetarian</label>
          <input
            id="filter-vegetarian"
            type="checkbox"
            name="diet"
            value="vegetarian"
            onChange={handleChange}
            checked={dietryFilterObject["vegetarian"]}
          />
        </article>
        <article className="filter-label-input-pair">
          <label htmlFor="filter-vegan">Vegan</label>
          <input id="filter-vegan" type="checkbox" name="diet" value="vegan" onChange={handleChange} checked={dietryFilterObject["vegan"]} />
        </article>
        <article className="filter-label-input-pair">
          <label htmlFor="filter-dietry-all">All</label>
          <input
            id="filter-dietry-all"
            type="checkbox"
            name="diet"
            value="dietry-all"
            onChange={handleChange}
            checked={dietryFilterObject["dietry-all"]}
          />
        </article>
      </section>
    </form>
  );
};

export default DietryFilter;
