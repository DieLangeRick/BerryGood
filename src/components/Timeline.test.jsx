import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Timeline from "./Timeline";

vi.mock("../config/content", () => ({
  timelineCards: [
    {
      id: 1,
      phase: "Week 1",
      label: "First sketches",
      image: "/timeline/1.jpg",
      description: "Preview.",
      modalDescription: "Full.",
      videoUrl: null,
    },
    {
      id: 2,
      phase: "Week 2",
      label: "First prototype",
      image: "/timeline/2.jpg",
      description: "Preview 2.",
      modalDescription: "Full 2.",
      videoUrl: null,
    },
  ],
}));

describe("Timeline", () => {
  it("renders a card for each entry in timelineCards", () => {
    render(<Timeline onCardClick={() => {}} />);
    expect(screen.getByText("First sketches")).toBeInTheDocument();
    expect(screen.getByText("First prototype")).toBeInTheDocument();
  });

  it("calls onCardClick with the card when a card is clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Timeline onCardClick={handleClick} />);
    await user.click(screen.getAllByRole("button")[0]);
    expect(handleClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: 1, label: "First sketches" })
    );
  });
});
