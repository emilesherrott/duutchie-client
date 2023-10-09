import React from "react";

import "./CostFilter.css";
import "../filter.css";

const CostFilter = ({ costFilterObject, setCostFilterObject }) => {
  const handleChange = (e) => {
    if (costFilterObject["cost-all"] && e.target.value !== "cost-all") {
      // 'All' option is true && selected checkbox isn't 'All'
      // Set's all to false && turns the selected checkbox true
      let updatedCostFilterObject = {
        "£": false,
        "££": false,
        "£££": false,
        "cost-all": false,
      };
      updatedCostFilterObject[e.target.value] = !updatedCostFilterObject[e.target.value];
      setCostFilterObject(updatedCostFilterObject);
    } else if (costFilterObject["cost-all"] && e.target.value === "cost-all") {
      // 'All' option is true && selected checkbox is 'All'
      //   Do nothing, can't deselect so nothing is true
    } else if (
      costFilterObject[e.target.value] &&
      Object.keys(costFilterObject).every((key) => key === e.target.value || costFilterObject[key] === false)
    ) {
      //  Selected item is true && every other option is false
      // Do nothing, can't deselect so nothing is true
    } else if (!costFilterObject[e.target.value] && e.target.value !== "cost-all") {
      // Selected item is false && selected item isn't 'All'
      // Toggle the selected item to true
      let updatedCostFilterObject = { ...costFilterObject };
      updatedCostFilterObject[e.target.value] = !updatedCostFilterObject[e.target.value];
      setCostFilterObject(updatedCostFilterObject);
    } else if (
      // Selected item is true && other items are mixed between true and false
      // Toggle the selected item to false
      costFilterObject[e.target.value] &&
      !Object.keys(costFilterObject).every((key) => costFilterObject[key] === false) &&
      !Object.keys(costFilterObject).every((key) => costFilterObject[key] === true)
    ) {
      let updatedCostFilterObject = { ...costFilterObject };
      updatedCostFilterObject[e.target.value] = !updatedCostFilterObject[e.target.value];
      setCostFilterObject(updatedCostFilterObject);
    } else if (e.target.value === "cost-all" && !costFilterObject["cost-all"]) {
      // Selected item is 'All' && 'All' is currently false
      // Toggle every item to false exepct 'All'
      let updatedCostFilterObject = {
        "£": false,
        "££": false,
        "£££": false,
        "cost-all": true,
      };
      setCostFilterObject(updatedCostFilterObject);
    }
  };

  return (
    <form className="filter-form">
      <div>Cost</div>
      <section id="filter-section-prep-time">
        <article className="filter-label-input-pair">
          <label htmlFor="filter-£">£</label>
          <input id="filter-£" type="checkbox" name="cost" value="£" onChange={handleChange} checked={costFilterObject["£"]} />
        </article>
        <article className="filter-label-input-pair">
          <label htmlFor="filter-££">££</label>
          <input id="filter-££" type="checkbox" name="cost" value="££" onChange={handleChange} checked={costFilterObject["££"]} />
        </article>
        <article className="filter-label-input-pair">
          <label htmlFor="filter-£££">£££</label>
          <input id="filter-£££" type="checkbox" name="cost" value="£££" onChange={handleChange} checked={costFilterObject["£££"]} />
        </article>
        <article className="filter-label-input-pair">
          <label htmlFor="filter-cost-all">All</label>
          <input id="filter-cost-all" type="checkbox" name="cost" value="cost-all" onChange={handleChange} checked={costFilterObject["cost-all"]} />
        </article>
      </section>
    </form>
  );
};

export default CostFilter;
