import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterTag from "./FilterTag";
describe("FilterTag", () => {
  it("render FilterTag correctly", () => {
    render(<FilterTag text="HTML" removeTag={jest.fn()} />);
    expect(screen.getByTestId("filterTag")).toBeInTheDocument();
  });
});
