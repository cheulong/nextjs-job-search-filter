import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterTag from "./FilterTag";
describe("FilterTag", () => {
  it("render FilterTag correctly", () => {
    const removeTag = () => {};
    render(<FilterTag text="HTML" removeTag={removeTag} />);
    expect(screen.getByTestId("filterTag")).toBeInTheDocument();
  });
});
