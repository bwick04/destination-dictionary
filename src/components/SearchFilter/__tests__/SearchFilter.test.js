import React from "react";
import { render, cleanup } from "react-testing-library";
import SearchFilter from "../SearchFilter";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("SearchFilter", () => {
  test("it renders", () => {
    const { getByTestId } = render(<SearchFilter />);
    expect(getByTestId("search-filter")).toBeVisible();
  });
});
