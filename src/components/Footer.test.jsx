import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

vi.mock("../config/content", () => ({
  team: {
    school: "Test School",
    year: "2025–2026",
    members: ["Alice", "Bob", "Charlie"],
  },
}));

describe("Footer", () => {
  it("renders all team member names", () => {
    render(<Footer />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("renders the school name and year", () => {
    render(<Footer />);
    expect(screen.getByText(/Test School/)).toBeInTheDocument();
    expect(screen.getByText(/2025–2026/)).toBeInTheDocument();
  });
});
