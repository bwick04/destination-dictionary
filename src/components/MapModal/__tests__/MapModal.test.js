import React from "react";
import { render, cleanup } from "react-testing-library";
import MapModal from "../MapModal";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Map Modal", () => {
  test("it renders map modal with them map", () => {
    // Arrange
    const props = {
      show: true,
      latlng: [24, 24]
    };

    // Act
    const { getByTestId } = render(<MapModal data={props}/>);

    // Assert
    //expect(getByTestId("map-modal")).toBeVisible();
  });
});
