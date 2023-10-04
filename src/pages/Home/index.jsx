import { React, useState } from "react";
import { Search } from "../../components"

import "./Home.css";
import "../pages.css";

const Home = () => {

  const [search, setSearch] = useState()

  return (
    <div className="home-container">
      <section className="home-head-section">
        <h1>Duutchie</h1>
        <Search setSearch={setSearch}/>
      </section>
    </div>
  );
};

export default Home;
