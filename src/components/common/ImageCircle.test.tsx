import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageCircle from "./ImageCircle";
describe("ImageCircle", () => {
  it("render image circle correctly", () => {
    render(<ImageCircle image="images/photosnap.svg" />);
    expect(screen.getByTestId("imageCircle")).toBeInTheDocument();
  });
});
