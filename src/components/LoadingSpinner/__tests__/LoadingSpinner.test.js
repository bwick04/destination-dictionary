import React from "react";
import { render, cleanup } from "react-testing-library";
import LoadingSpinner from "../LoadingSpinner";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Loading Spinner", () => {
  test("it renders", () => {
    const { getByTestId } = render(<LoadingSpinner />);
    expect(getByTestId("loading-spinner")).toBeVisible();
  });
});
