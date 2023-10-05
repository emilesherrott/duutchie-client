import { React, useState } from "react";
import { Search, filter } from "../../components";

import "./Home.css";
import "../pages.css";

const Home = () => {
  const [search, setSearch] = useState();
  const [filterToggle, setFilterToggle] = useState(false);
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

  const handleClick = () => {
    setFilterToggle((prevState) => !prevState);
  };

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
          </section>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default Home;
