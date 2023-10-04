import React from "react";

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from ".";

describe(" layout / NavBar", () => {
  beforeEach(() => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
  });

  afterEach(() => {
    cleanup()
  })

  it("renders the Home link", () => {
    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("renders the About Us link", () => {
    const aboutUsLink = screen.getByRole("link", { name: /About Us/i });
    expect(aboutUsLink).toBeInTheDocument();
  });
});
