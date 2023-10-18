import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InputBox from "./InputBox";
describe("InputBox", () => {
  it("render InputBox correctly", () => {
    render(<InputBox />);
    // expect(screen.getByTestId("inputBox")).toBeInTheDocument();
  });
});
