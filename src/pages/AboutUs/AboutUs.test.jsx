import React from "react";

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);


import AboutUs from ".";

describe("pages / AboutUs", () => {
  beforeEach(() => {
    render(
        <AboutUs />
    );
  });

  afterEach(() => {
    cleanup()
  })

  it("renders the About Us heading", () => {
    const aboutUs = screen.getByRole("heading", { name: /About Us/i });
    expect(aboutUs).toBeInTheDocument();
  });

});