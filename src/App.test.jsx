import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

vi.mock("./config/content", () => ({
  hero: { type: "image", src: "/hero.jpg", title: "Aardbei", tagline: "Tagline" },
  intro: { text: "Intro text." },
  timelineCards: [
    {
      id: 1,
      phase: "Week 1",
      label: "First sketches",
      image: "/timeline/1.jpg",
      description: "Preview.",
      modalDescription: "Full modal text.",
      videoUrl: null,
    },
  ],
  team: { school: "School", year: "2025–2026", members: ["Alice"] },
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Aardbei")).toBeInTheDocument();
  });

  it("opens modal when a timeline card is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Full modal text.")).toBeInTheDocument();
  });

  it("closes modal when backdrop is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Full modal text.")).toBeInTheDocument();
    await user.click(screen.getByTestId("modal-backdrop"));
    expect(screen.queryByText("Full modal text.")).not.toBeInTheDocument();
  });
});
