import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Should render header", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 }) as HTMLElement;

    expect(heading).toBeInTheDocument();
  });
});
