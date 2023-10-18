import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
describe("Footer", () => {
  it("render Footer correctly", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-name")).toHaveTextContent(
      "Cheulong Sear"
    );
  });
});
