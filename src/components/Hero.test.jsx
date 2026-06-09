import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

vi.mock("../config/content", () => ({
  hero: {
    type: "image",
    src: "/test-hero.jpg",
    title: "Test Title",
    tagline: "Test tagline",
  },
}));

describe("Hero", () => {
  it("renders the title", () => {
    render(<Hero />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Hero />);
    expect(screen.getByText("Test tagline")).toBeInTheDocument();
  });

  it("renders an img element when type is image", () => {
    render(<Hero />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/test-hero.jpg");
  });
});
