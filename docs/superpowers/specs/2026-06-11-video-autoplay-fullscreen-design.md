---
name: video-autoplay-fullscreen
description: When a card with a video is opened, the video autoplays and enters native fullscreen. The modal stays at its normal size behind it.
metadata:
  type: project
---

# Video Autoplay & Fullscreen on Card Open

## Goal

When a user taps a card that has a video, the modal opens and the video immediately plays fullscreen. When the user exits fullscreen, the modal is still visible at its normal size.

## Scope

Single file change: `src/components/Modal.jsx`

## Implementation

1. Add `useRef` on the `<video>` element.
2. Add a `useEffect` that fires on mount:
   - If `card.videoUrl` is a local video, call `video.play()` (returns a Promise).
   - After play resolves, call `video.requestFullscreen()` with `video.webkitEnterFullscreen()` as iOS fallback.
   - Wrap in try/catch — if blocked, modal shows normally with paused video.
3. Add `autoPlay` attribute to the `<video>` element as a declarative fallback.

## Constraints

- Image-only cards are unaffected.
- Modal size and layout do not change.
- Muted and unmuted videos both go fullscreen (autoplay with sound works because the tap IS the user gesture).
