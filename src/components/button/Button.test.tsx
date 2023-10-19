import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
describe("Button", () => {
  it("render button correctly", () => {
    render(<Button primary={true} text="test button" />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
