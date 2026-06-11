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

const mockCardWithLocalVideo = {
  ...mockCard,
  videoUrl: "/videos/week1.mp4",
};

describe("Modal", () => {
  afterEach(() => vi.restoreAllMocks());

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

  it("autoplays and requests fullscreen when a local video card opens", async () => {
    const playMock = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);

    // jsdom does not implement requestFullscreen, so define it before spying
    if (!Element.prototype.requestFullscreen) {
      Element.prototype.requestFullscreen = () => Promise.resolve();
    }
    const fullscreenMock = vi.spyOn(Element.prototype, "requestFullscreen").mockResolvedValue(undefined);

    render(<Modal card={mockCardWithLocalVideo} onClose={() => {}} />);

    await vi.waitFor(() => expect(playMock).toHaveBeenCalled());
    expect(fullscreenMock).toHaveBeenCalled();
  });

  it("falls back to webkitEnterFullscreen when requestFullscreen is absent", async () => {
    const playMock = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);

    // Remove requestFullscreen from the prototype so the instance has no such property
    const originalRequestFullscreen = Element.prototype.requestFullscreen;
    delete Element.prototype.requestFullscreen;

    const webkitMock = vi.fn();
    HTMLVideoElement.prototype.webkitEnterFullscreen = webkitMock;

    try {
      render(<Modal card={mockCardWithLocalVideo} onClose={() => {}} />);

      await vi.waitFor(() => expect(playMock).toHaveBeenCalled());
      expect(webkitMock).toHaveBeenCalled();
    } finally {
      Element.prototype.requestFullscreen = originalRequestFullscreen;
      delete HTMLVideoElement.prototype.webkitEnterFullscreen;
    }
  });
});
