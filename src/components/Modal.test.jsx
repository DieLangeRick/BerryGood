import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

const mockCard = {
  id: 1,
  phase: "Week 1",
  label: "First sketches",
  image: "/timeline/1.jpg",
  description: "Short.",
  modalDescription: "Full description of what happened.",
  videoUrl: null,
};

const mockCardWithVideo = {
  ...mockCard,
  videoUrl: "https://www.youtube.com/watch?v=abc123",
};

describe("Modal", () => {
  it("renders the card label", () => {
    render(<Modal card={mockCard} onClose={() => {}} />);
    expect(screen.getByText("First sketches")).toBeInTheDocument();
  });

  it("renders the modal description", () => {
    render(<Modal card={mockCard} onClose={() => {}} />);
    expect(screen.getByText("Full description of what happened.")).toBeInTheDocument();
  });

  it("shows an image when there is no videoUrl", () => {
    render(<Modal card={mockCard} onClose={() => {}} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/timeline/1.jpg");
    expect(screen.queryByTitle("First sketches")).not.toBeInTheDocument();
  });

  it("shows a YouTube iframe when videoUrl is present", () => {
    render(<Modal card={mockCardWithVideo} onClose={() => {}} />);
    expect(screen.getByTitle("First sketches")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("calls onClose when the backdrop is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Modal card={mockCard} onClose={handleClose} />);
    await user.click(screen.getByTestId("modal-backdrop"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("does not call onClose when the modal content is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Modal card={mockCard} onClose={handleClose} />);
    await user.click(screen.getByTestId("modal-content"));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("calls onClose when Escape key is pressed", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Modal card={mockCard} onClose={handleClose} />);
    await user.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalled();
  });
});
