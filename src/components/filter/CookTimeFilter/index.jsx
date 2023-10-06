import React from 'react'

import "./CookTimeFilter.css"
import "../filter.css"

const CookTimeFilter = ({ cookTimeFilterObject, setCookTimeFilterObject }) => {


    const handleChange = (e) => {
        if (cookTimeFilterObject["cook-time-all"] && e.target.value !== "cook-time-all") {
            // 'All' option is true && selected checkbox isn't 'All'
            // Set's all to false && turns the selected checkbox true
            let updatedCookTimeFilterObject = {
              "0-20": false,
              "21-40": false,
              "41+": false,
              "cook-time-all": false
            };
            updatedCookTimeFilterObject[e.target.value] = !updatedCookTimeFilterObject[e.target.value];
            setCookTimeFilterObject(updatedCookTimeFilterObject);
          } else if (cookTimeFilterObject["cook-time-all"] && e.target.value === "cook-time-all") {
            // 'All' option is true && selected checkbox is 'All'
            //   Do nothing, can't deselect so nothing is true
          } else if (
            cookTimeFilterObject[e.target.value] &&
            Object.keys(cookTimeFilterObject).every((key) => key === e.target.value || cookTimeFilterObject[key] === false)
          ) {
            //  Selected item is true && every other option is false
            // Do nothing, can't deselect so nothing is true
          } else if (!cookTimeFilterObject[e.target.value] && e.target.value !== "cook-time-all") {
            // Selected item is false && selected item isn't 'All'
            // Toggle the selected item to true
            let updatedCookTimeFilterObject = { ...cookTimeFilterObject };
            updatedCookTimeFilterObject[e.target.value] = !updatedCookTimeFilterObject[e.target.value];
            setCookTimeFilterObject(updatedCookTimeFilterObject);
          } else if (
            // Selected item is true && other items are mixed between true and false
            // Toggle the selected item to false
            cookTimeFilterObject[e.target.value] &&
            !Object.keys(cookTimeFilterObject).every((key) => cookTimeFilterObject[key] === false) &&
            !Object.keys(cookTimeFilterObject).every((key) => cookTimeFilterObject[key] === true)
          ) {
            let updatedCookTimeFilterObject = { ...cookTimeFilterObject };
            updatedCookTimeFilterObject[e.target.value] = !updatedCookTimeFilterObject[e.target.value];
            setCookTimeFilterObject(updatedCookTimeFilterObject);
          } else if (e.target.value === "cook-time-all" && !cookTimeFilterObject["cook-time-all"]) {
            // Selected item is 'All' && 'All' is currently false
            // Toggle every item to false exepct 'All'
            let updatedCookTimeFilterObject = {
              "0-20": false,
              "21-40": false,
              "41+": false,
              "cook-time-all": true
            };
            setCookTimeFilterObject(updatedCookTimeFilterObject);
          } 
    }

  return (
    <form className="filter-form">
        <section id="filter-section-cook-time">
            <div>Cook Time</div>
           
            <label htmlFor="filter-0-40">0-40 mins</label>
            <input id="filter-0-40" type="checkbox" name="cook-time" value="0-40" onChange={handleChange} checked={cookTimeFilterObject["0-40"]} />

            <label htmlFor="filter-41-80">40mins - 1hr 20</label>
            <input id="filter-41-80" type="checkbox" name="cook-time" value="41-80" onChange={handleChange} checked={cookTimeFilterObject["41-80"]} />



            <label htmlFor="filter-81+">1hr 21+</label>
            <input id="filter-81+" type="checkbox" name="cook-time" value="81+" onChange={handleChange} checked={cookTimeFilterObject["81+"]} />

            <label htmlFor="filter-cook-time-all">All+</label>
            <input id="filter-cook-time-all" type="checkbox" name="cook-time" value="cook-time-all" onChange={handleChange} checked={cookTimeFilterObject["cook-time-all"]} />
        </section>
    </form>
  )
}

export default CookTimeFilter