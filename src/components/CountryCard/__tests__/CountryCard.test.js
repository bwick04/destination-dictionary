import React from "react";
import { render, cleanup } from "react-testing-library";
import CountryCard from "../CountryCard";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Country Card", () => {
  test("it renders the card with flag and country name,", () => {
    // Arrange
    const props = {
      flag: require("./taiwan-flag.png"),
      name: "Taiwan"
    };

    // Act
    const { getByTestId } = render(<CountryCard data={props} />);
    
    // Assert
    expect(getByTestId("CountryCard-flag")).toBeInTheDocument();
    expect(getByTestId("CountryCard-name").textContent).toBe("Taiwan");
  });
});
