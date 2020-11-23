import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Counter from "./counter";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Counter />, container);
  });
  expect(container.textContent[0]).toBe(`0`);
  act(() => {
    render(<Counter />, container);
  });
  expect(container.textContent).toBe(`0Increment like +1Increment like +10Increment like +101`);
  act(() => {
    render(<Counter />, container);
  });
  expect(container.textContent[0]).toBe(`0`);
  act(() => {
    render(<Counter />, container);
  });
  expect(container.textContent).toBe(`0Increment like +1Increment like +10Increment like +101`);
});
