import React from "react";

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);


import Search from ".";

describe("components / Search", () => {
  beforeEach(() => {
    render(
        <Search />
    );
  });

  afterEach(() => {
    cleanup()
  })

  it("renders the input field", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders the placeholder", () => {
    const placeholder = screen.getByPlaceholderText("Search")
    expect(placeholder).toBeInTheDocument()
  })

});
