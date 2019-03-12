import React from "react";
import { render, cleanup } from "react-testing-library";
import CountryContainer from "../CountryContainer";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("SearchFilter", () => {
  test("it renders", () => {
    const { getByTestId } = render(<CountryContainer />);
    expect(getByTestId('container')).toBeVisible();
  });

  // test("it filters correctly", () => {
  // });

  // test("it shows info modal onclick", () => {
  // });

  // test("it shows map modal onclick", () => {
  // });

});
