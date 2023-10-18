import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InputBox from "./InputBox";
import { jobContext } from "@/contexts/JobContext";
describe("InputBox", () => {
  it("render InputBox correctly", () => {
    render(
      <jobContext.Provider
        value={{
          jobsListing: [],
          tags: ["HTML"],
          tempJobs: [],
          addTags: (tag: string) => undefined,
        }}
      >
        <InputBox />
      </jobContext.Provider>
    );
    expect(screen.getAllByTestId("inputBox")[0]).toBeInTheDocument();
  });
});
