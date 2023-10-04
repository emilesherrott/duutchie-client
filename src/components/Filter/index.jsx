import { React, useEffect } from "react";

import "./Filter.css";

const Filter = ({ filterObject, setFilterObject }) => {

  const handleChange = (e) => {
    // Initial click where 'all' is checked and the item clicked isn't 'all'
    if (filterObject["region_all"] && e.target.value !== "region_all") {
      console.log("1");
      let updatedFilterObject = {
        carribean: false,
        latin_american: false,
        southern_states: false,
        west_african: false,
        east_african: false,
        central_african: false,
        south_african: false,
        region_all: false,
      };
      updatedFilterObject[e.target.value] =
        !updatedFilterObject[e.target.value];
      setFilterObject(updatedFilterObject);

      // Inital click where 'all' is checked and the item clicked is 'al'
    } else if (filterObject["region_all"] && e.target.value === "region_all") {
      //  The clicked item is true and every other item is false
    } else if (
      filterObject[e.target.value] &&
      Object.keys(filterObject).every(
        (key) => key === e.target.value || filterObject[key] === false
      )
    ) {
      // The clicked item is false
    } else if (
      !filterObject[e.target.value] &&
      e.target.value !== "region_all"
    ) {
      let updatedFilterObject = {...filterObject}
      updatedFilterObject[e.target.value] = !updatedFilterObject[e.target.value];
      setFilterObject(updatedFilterObject);
      //
    } else if (
      filterObject[e.target.value] &&
      !Object.keys(filterObject).every((key) => filterObject[key] === false) &&
      !Object.keys(filterObject).every((key) => filterObject[key] === true)
    ) {

      let updatedFilterObject = { ...filterObject };
      updatedFilterObject[e.target.value] =
        !updatedFilterObject[e.target.value];
      setFilterObject(updatedFilterObject);
      
    } else if (e.target.value === "region_all" && !filterObject["region_all"]) {
      let updatedFilterObject = {
        carribean: false,
        latin_american: false,
        southern_states: false,
        west_african: false,
        east_african: false,
        central_african: false,
        south_african: false,
        region_all: true,
      };
      setFilterObject(updatedFilterObject);
    }
  };

  return (
    <form id="filter-form">
      <section id="filter-section-region">
        <div>Region</div>
        <label htmlFor="filter-carribean">Carribean</label>
        <input
          id="filter-carribean"
          type="checkbox"
          name="region"
          value="carribean"
          onChange={handleChange}
          checked={filterObject["carribean"]}
        />

        <label htmlFor="filter-latin_american">Latin American</label>
        <input
          id="filter-latin_american"
          type="checkbox"
          name="region"
          value="latin_american"
          onChange={handleChange}
          checked={filterObject["latin_american"]}
        />

        <label htmlFor="filter-southern_state">Southern States</label>
        <input
          id="filter-southern_state"
          type="checkbox"
          name="region"
          value="southern_states"
          onChange={handleChange}
          checked={filterObject["southern_states"]}
        />

        <label htmlFor="filter-west_african">West African</label>
        <input
          id="filter-west_african"
          type="checkbox"
          name="region"
          value="west_african"
          onChange={handleChange}
          checked={filterObject["west_african"]}
        />

        <label htmlFor="filter-east_african">East African</label>
        <input
          id="filter-east_african"
          type="checkbox"
          name="region"
          value="east_african"
          onChange={handleChange}
          checked={filterObject["east_african"]}
        />

        <label htmlFor="filter-central_african">Central African</label>
        <input
          id="filter-central_african"
          type="checkbox"
          name="region"
          value="central_african"
          onChange={handleChange}
          checked={filterObject["central_african"]}
        />

        <label htmlFor="filter-south_african">South African</label>
        <input
          id="filter-south_african"
          type="checkbox"
          name="region"
          value="south_african"
          onChange={handleChange}
          checked={filterObject["south_african"]}
        />

        <label htmlFor="filter-region_all">All</label>
        <input
          id="filter-region_all"
          type="checkbox"
          name="region"
          value="region_all"
          onChange={handleChange}
          checked={filterObject["region_all"]}
        />
      </section>
    </form>
  );
};

export default Filter;
