import React from "react";

import "./PrepTimeFilter.css";
import "../filter.css"

const PrepTimeFilter = ({ prepTimeFilterObject, setPrepTimeFilterObject }) => {
  const handleChange = (e) => {
    if (prepTimeFilterObject["prep-time-all"] && e.target.value !== "prep-time-all") {
      // 'All' option is true && selected checkbox isn't 'All'
      // Set's all to false && turns the selected checkbox true
      let updatedPrepTimeFilterObject = {
        "0-20": false,
        "21-40": false,
        "41+": false,
        "prep-time-all": false
      };
      updatedPrepTimeFilterObject[e.target.value] = !updatedPrepTimeFilterObject[e.target.value];
      setPrepTimeFilterObject(updatedPrepTimeFilterObject);
    } else if (prepTimeFilterObject["prep-time-all"] && e.target.value === "prep-time-all") {
      // 'All' option is true && selected checkbox is 'All'
      //   Do nothing, can't deselect so nothing is true
    } else if (
      prepTimeFilterObject[e.target.value] &&
      Object.keys(prepTimeFilterObject).every((key) => key === e.target.value || prepTimeFilterObject[key] === false)
    ) {
      //  Selected item is true && every other option is false
      // Do nothing, can't deselect so nothing is true
    } else if (!prepTimeFilterObject[e.target.value] && e.target.value !== "prep-time-all") {
      // Selected item is false && selected item isn't 'All'
      // Toggle the selected item to true
      let updatedPrepTimeFilterObject = { ...prepTimeFilterObject };
      updatedPrepTimeFilterObject[e.target.value] = !updatedPrepTimeFilterObject[e.target.value];
      setPrepTimeFilterObject(updatedPrepTimeFilterObject);
    } else if (
      // Selected item is true && other items are mixed between true and false
      // Toggle the selected item to false
      prepTimeFilterObject[e.target.value] &&
      !Object.keys(prepTimeFilterObject).every((key) => prepTimeFilterObject[key] === false) &&
      !Object.keys(prepTimeFilterObject).every((key) => prepTimeFilterObject[key] === true)
    ) {
      let updatedPrepTimeFilterObject = { ...prepTimeFilterObject };
      updatedPrepTimeFilterObject[e.target.value] = !updatedPrepTimeFilterObject[e.target.value];
      setPrepTimeFilterObject(updatedPrepTimeFilterObject);
    } else if (e.target.value === "prep-time-all" && !prepTimeFilterObject["prep-time-all"]) {
      // Selected item is 'All' && 'All' is currently false
      // Toggle every item to false exepct 'All'
      let updatedPrepTimeFilterObject = {
        "0-20": false,
        "21-40": false,
        "41+": false,
        "prep-time-all": true
      };
      setPrepTimeFilterObject(updatedPrepTimeFilterObject);
    }
  };

  return (
    <form className="filter-form">
      <section id="filter-section-prep-time">
        <div>Prep Time</div>
        <label htmlFor="filter-0-20">0-20 mins</label>
        <input id="filter-0-20" type="checkbox" name="prep-time" value="0-20" onChange={handleChange} checked={prepTimeFilterObject["0-20"]} />

        <label htmlFor="filter-21-40">21-40 mins</label>
        <input id="filter-21-40" type="checkbox" name="prep-time" value="21-40" onChange={handleChange} checked={prepTimeFilterObject["21-40"]} />
      </section>

      <label htmlFor="filter-41+">41+ mins</label>
      <input id="filter-41+" type="checkbox" name="prep-time" value="41+" onChange={handleChange} checked={prepTimeFilterObject["41+"]} />

      <label htmlFor="filter-prep-time-all">All</label>
      <input
        id="filter-prep-time-all"
        type="checkbox"
        name="prep-time"
        value="prep-time-all"
        onChange={handleChange}
        checked={prepTimeFilterObject["prep-time-all"]}
      />
    </form>
  );
};

export default PrepTimeFilter;
