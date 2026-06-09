import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

vi.mock("../config/content", () => ({
  intro: { text: "This is the intro text." },
}));

describe("Intro", () => {
  it("renders the intro text", () => {
    render(<Intro />);
    expect(screen.getByText("This is the intro text.")).toBeInTheDocument();
  });
});
