import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import { JobProvider } from "@/contexts/JobContext";
describe("CardList", () => {
  it("render card list correctly", () => {
    render(
      <JobProvider>
        <CardList />
      </JobProvider>
    );
    expect(screen.getAllByTestId("company")[0]).toHaveTextContent("Photosnap");
  });
});
