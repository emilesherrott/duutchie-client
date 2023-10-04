import { React, useState } from "react";
import { Search, Filter } from "../../components";

import "./Home.css";
import "../pages.css";

const Home = () => {
  const [search, setSearch] = useState();
  const [filterToggle, setFilterToggle] = useState(false);
  const [filterObject, setFilterObject] = useState({
      carribean: false,
      latin_american: false,
      southern_states: false,
      west_african: false,
      east_african: false,
      central_african: false,
      south_african: false,
      region_all: true
  });

  const handleClick = () => {
    setFilterToggle((prevState) => !prevState);
  };

  console.log(filterObject)

  return (
    <div className="home-container">
      <section className="home-head-section">
        <h1>Duutchie</h1>
        <Search setSearch={setSearch} />
        <div onClick={handleClick} className="home-filter-button">
          Filter
        </div>
        {filterToggle ? (
          <>
            <Filter filterObject={filterObject} setFilterObject={setFilterObject}/>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default Home;
