import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./layout";
import { Home, AboutUs } from "./pages";

import "./App.css";

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
