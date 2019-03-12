import React from "react";
import { render, cleanup } from "react-testing-library";
import PageNumbers from "../PageNumbers";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("PageNumbers", () => {
  test("it renders", () => {
    const { getByTestId } = render(<PageNumbers />);
    expect(getByTestId("page-number")).toBeVisible();
  });

  test("it updates on click", () => {
    // Arrange
    const props = {
      number: 1,
      currentPage: 1
    };

    // Act
    const { getByTestId } = render(<PageNumbers props={props} />);

    // Assert
    expect(getByTestId("page-number")).toBeVisible();
  });
});
