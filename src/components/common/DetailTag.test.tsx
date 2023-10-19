import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DetailTag from "./DetailTag";
describe("DetailTag", () => {
  it("render detail tag correctly", () => {
    render(<DetailTag detail="HTML" />);
    expect(screen.getByTestId("tag")).toHaveTextContent("HTML");
  });
});
