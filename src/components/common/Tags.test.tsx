import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Tags from "./Tags";
describe("Tags", () => {
  it("render tags correctly", () => {
    render(<Tags text="HTML" />);
    expect(screen.getByTestId("tags")).toHaveTextContent("HTML");
  });
});
