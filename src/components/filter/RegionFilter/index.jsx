import React from "react";

import "./RegionFilter.css";
import "../filter.css";

const RegionFilter = ({ regionFilterObject, setRegionFilterObject }) => {
  const handleChange = (e) => {
    if (regionFilterObject["region_all"] && e.target.value !== "region_all") {
      // 'All' option is true && selected checkbox isn't 'All'
      // Set's all to false && turns the selected checkbox true
      let updatedRegionFilterObject = {
        carribean: false,
        latin_american: false,
        southern_states: false,
        west_african: false,
        east_african: false,
        central_african: false,
        south_african: false,
        region_all: false,
      };
      updatedRegionFilterObject[e.target.value] = !updatedRegionFilterObject[e.target.value];
      setRegionFilterObject(updatedRegionFilterObject);
    } else if (regionFilterObject["region_all"] && e.target.value === "region_all") {
      // 'All' option is true && selected checkbox is 'All'
      //   Do nothing, can't deselect so nothing is true
    } else if (
      regionFilterObject[e.target.value] &&
      Object.keys(regionFilterObject).every((key) => key === e.target.value || regionFilterObject[key] === false)
    ) {
      //  Selected item is true && every other option is false
      // Do nothing, can't deselect so nothing is true
    } else if (!regionFilterObject[e.target.value] && e.target.value !== "region_all") {
      // Selected item is false && selected item isn't 'All'
      // Toggle the selected item to true
      let updatedRegionFilterObject = { ...regionFilterObject };
      updatedRegionFilterObject[e.target.value] = !updatedRegionFilterObject[e.target.value];
      setRegionFilterObject(updatedRegionFilterObject);
    } else if (
      // Selected item is true && other items are mixed between true and false
      // Toggle the selected item to false
      regionFilterObject[e.target.value] &&
      !Object.keys(regionFilterObject).every((key) => regionFilterObject[key] === false) &&
      !Object.keys(regionFilterObject).every((key) => regionFilterObject[key] === true)
    ) {
      let updatedRegionFilterObject = { ...regionFilterObject };
      updatedRegionFilterObject[e.target.value] = !updatedRegionFilterObject[e.target.value];
      setRegionFilterObject(updatedRegionFilterObject);
    } else if (e.target.value === "region_all" && !regionFilterObject["region_all"]) {
      // Selected item is 'All' && 'All' is currently false
      // Toggle every item to false exepct 'All'
      let updatedRegionFilterObject = {
        carribean: false,
        latin_american: false,
        southern_states: false,
        west_african: false,
        east_african: false,
        central_african: false,
        south_african: false,
        region_all: true,
      };
      setRegionFilterObject(updatedRegionFilterObject);
    }
  };

  return (
    <form className="filter-form">
      <div>Region</div>
      <section id="filter-section-region">
        <article className="filter-labe-input-pair">
          <label htmlFor="filter-carribean">Carribean</label>
          <input
            id="filter-carribean"
            type="checkbox"
            name="region"
            value="carribean"
            onChange={handleChange}
            checked={regionFilterObject["carribean"]}
          />
        </article>
        <article className="filter-labe-input-pair">
          <label htmlFor="filter-latin_american">Latin American</label>
          <input
            id="filter-latin_american"
            type="checkbox"
            name="region"
            value="latin_american"
            onChange={handleChange}
            checked={regionFilterObject["latin_american"]}
          />
        </article>

        <article className="filter-labe-input-pair">
          <label htmlFor="filter-southern_state">Southern States</label>
          <input
            id="filter-southern_state"
            type="checkbox"
            name="region"
            value="southern_states"
            onChange={handleChange}
            checked={regionFilterObject["southern_states"]}
          />
        </article>

        <article className="filter-labe-input-pair">
          <label htmlFor="filter-west_african">West African</label>
          <input
            id="filter-west_african"
            type="checkbox"
            name="region"
            value="west_african"
            onChange={handleChange}
            checked={regionFilterObject["west_african"]}
          />
        </article>

        <article className="filter-labe-input-pair">
          <label htmlFor="filter-east_african">East African</label>
          <input
            id="filter-east_african"
            type="checkbox"
            name="region"
            value="east_african"
            onChange={handleChange}
            checked={regionFilterObject["east_african"]}
          />
        </article>

        <article className="filter-labe-input-pair">
          <label htmlFor="filter-central_african">Central African</label>
          <input
            id="filter-central_african"
            type="checkbox"
            name="region"
            value="central_african"
            onChange={handleChange}
            checked={regionFilterObject["central_african"]}
          />
        </article>

        <article className="filter-labe-input-pair">
          <label htmlFor="filter-south_african">South African</label>
          <input
            id="filter-south_african"
            type="checkbox"
            name="region"
            value="south_african"
            onChange={handleChange}
            checked={regionFilterObject["south_african"]}
          />
        </article>

        <article className="filter-labe-input-pair">
          <label htmlFor="filter-region_all">All</label>
          <input
            id="filter-region_all"
            type="checkbox"
            name="region"
            value="region_all"
            onChange={handleChange}
            checked={regionFilterObject["region_all"]}
          />
        </article>
      </section>
    </form>
  );
};

export default RegionFilter;
