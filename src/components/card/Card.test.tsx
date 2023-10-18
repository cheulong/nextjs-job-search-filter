import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { Jobs } from "@/mocks/data";
describe("Card", () => {
  it("render card correctly", () => {
    const mockCardDetails = Jobs[0];
    render(<Card details={mockCardDetails} />);
    expect(screen.getByTestId("company")).toHaveTextContent("Photosnap");
  });
});
