import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./layout";
import { Home, AboutUs, RecipePage } from "./pages";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/:uriName" element={<RecipePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
