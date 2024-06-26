import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Import the userEvent library
import "@testing-library/jest-dom";

describe("Should render basic home page components", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 }) as HTMLElement;

    expect(heading).toBeInTheDocument();
  });
  it("renders a button", () => {
    render(<Home />);

    const button = screen.getByRole("button") as HTMLElement;

    expect(button).toBeInTheDocument();
  });
});
describe("Dialog opens on button click", () => {
  it("renders the Dialog when the button is clicked", async () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      name: "Add a place to eat!",
    });
    userEvent.click(button);
    const dialogTitle = await screen.findByText(
      "Ooo exciting! Somewhere new to eat!!!"
    );

    expect(dialogTitle).toBeInTheDocument();
  });
});
