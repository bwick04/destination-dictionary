import React from "react";
import { render, cleanup } from "react-testing-library";
import InfoModal from "../InfoModal";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Info Modal", () => {
  test("it renders the info modal with all the correct data", () => {
    // Arrange
    const props = {
      name: "Taiwan",
      capital: "Taipei",
      population: 5000,
      languages: [{ name: "Chinese" }],
      currencies: [{ name: "New Taiwan dollar" }]
    };

    // Act
    const { getByTestId } = render(<InfoModal data={props} />);

    // Assert
    expect(getByTestId("info-modal").textContent).toContain("Taiwan");
    expect(getByTestId("info-modal").textContent).toContain("Taipei");
    expect(getByTestId("info-modal").textContent).toContain(5000);
    expect(getByTestId("info-modal").textContent).toContain("Chinese");
    expect(getByTestId("info-modal").textContent).toContain("New Taiwan dollar");
  });
});
