import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TimelineCard from "./TimelineCard";

const mockCard = {
  id: 1,
  phase: "Week 1",
  label: "First sketches",
  image: "/timeline/1.jpg",
  description: "Short preview text.",
  modalDescription: "Full description.",
  videoUrl: null,
};

describe("TimelineCard", () => {
  it("renders the phase label", () => {
    render(<TimelineCard card={mockCard} onClick={() => {}} />);
    expect(screen.getByText("Week 1")).toBeInTheDocument();
  });

  it("renders the card label", () => {
    render(<TimelineCard card={mockCard} onClick={() => {}} />);
    expect(screen.getByText("First sketches")).toBeInTheDocument();
  });

  it("renders the preview description", () => {
    render(<TimelineCard card={mockCard} onClick={() => {}} />);
    expect(screen.getByText("Short preview text.")).toBeInTheDocument();
  });

  it("calls onClick with the card when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<TimelineCard card={mockCard} onClick={handleClick} />);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledWith(mockCard);
  });
});
