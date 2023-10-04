import React from "react";

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);


import Home from ".";

describe("pages / Home", () => {
  beforeEach(() => {
    render(
        <Home />
    );
  });

  afterEach(() => {
    cleanup()
  })

  it("renders the Duutchie heading", () => {
    const duutchie = screen.getByRole("heading", { name: /Duutchie/i });
    expect(duutchie).toBeInTheDocument();
  });

});
