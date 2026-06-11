# Video Autoplay & Fullscreen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** When a card with a local video is opened, the video autoplays and immediately enters native fullscreen; exiting fullscreen returns the user to the modal unchanged.

**Architecture:** Add a `useRef` to the video element in `Modal.jsx` and a `useEffect` that calls `video.play()` then `video.requestFullscreen()` (with `webkitEnterFullscreen` fallback for iOS Safari) on mount. Errors are caught silently so the modal degrades gracefully if the browser blocks autoplay or fullscreen.

**Tech Stack:** React (useRef, useEffect), Fullscreen API, webkit fullscreen API (iOS Safari)

---

### Task 1: Add autoplay + fullscreen to Modal.jsx

**Files:**
- Modify: `src/components/Modal.jsx`
- Test: `src/components/Modal.test.jsx`

- [ ] **Step 1: Write the failing test**

Add `mockCardWithLocalVideo` and the new test to `src/components/Modal.test.jsx`, inside the existing `describe("Modal")` block:

```jsx
const mockCardWithLocalVideo = {
  ...mockCard,
  videoUrl: "/videos/week1.mp4",
};

it("autoplays and requests fullscreen when a local video card opens", async () => {
  const playMock = vi.fn().mockResolvedValue(undefined);
  const fullscreenMock = vi.fn().mockResolvedValue(undefined);

  HTMLMediaElement.prototype.play = playMock;
  Element.prototype.requestFullscreen = fullscreenMock;

  render(<Modal card={mockCardWithLocalVideo} onClose={() => {}} />);

  await vi.waitFor(() => expect(playMock).toHaveBeenCalled());
  expect(fullscreenMock).toHaveBeenCalled();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Modal --run`

Expected: FAIL — `play` is not called (no autoplay logic exists yet)

- [ ] **Step 3: Implement autoplay + fullscreen in Modal.jsx**

Replace the entire contents of `src/components/Modal.jsx` with:

```jsx
import { useEffect, useRef } from "react";

export default function Modal({ card, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    (async () => {
      try {
        await video.play();
        if (video.requestFullscreen) {
          await video.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      } catch {
        // autoplay or fullscreen blocked — modal stays open normally
      }
    })();
  }, []);

  return (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        data-testid="modal-content"
        className="bg-white border border-ink/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink/10 bg-cream">
          <div className="flex items-center gap-2.5">
            {card.isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-berry animate-pulse" />}
            <span className="font-mono text-berry text-xs tracking-[0.3em] uppercase">{card.phase}</span>
          </div>
          <button
            onClick={onClose}
            className="text-ink/30 hover:text-berry transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Media */}
        <div className="relative">
          {card.videoUrl && isLocalVideo(card.videoUrl) ? (
            <video
              ref={videoRef}
              className={`w-full object-cover ${card.videoMuted === false ? "aspect-video" : "max-h-64"}`}
              src={card.videoUrl}
              controls
              autoPlay
              playsInline
              muted={card.videoMuted !== false}
            />
          ) : card.videoUrl ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeId(card.videoUrl)}`}
                title={card.label}
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={card.modalImage || card.image}
              alt={card.label}
              className="w-full object-cover max-h-64"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="font-display text-lg font-black text-ink uppercase tracking-wide mb-4">
            {card.label}
          </h2>
          <p className="font-mono text-sm text-ink/70 leading-relaxed">{card.modalDescription}</p>
        </div>
      </div>
    </div>
  );
}

function isLocalVideo(url) {
  return url.startsWith("/");
}

function getYouTubeId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|\/shorts\/|\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : "";
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test -- Modal --run`

Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Modal.jsx src/components/Modal.test.jsx
git commit -m "feat: autoplay and fullscreen video when card is opened"
```
