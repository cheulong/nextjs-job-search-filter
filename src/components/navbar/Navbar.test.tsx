import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
describe("Navbar", () => {
  it("render Navbar correctly", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
