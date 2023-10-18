import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
describe("CardList", () => {
  it("render card list correctly", () => {
    render(<CardList />);
    // expect(screen.getByTestId("company")).toHaveTextContent("Photosnap");
  });
});
