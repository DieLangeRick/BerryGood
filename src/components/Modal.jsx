import { useEffect } from "react";

export default function Modal({ card, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        data-testid="modal-content"
        className="bg-[#16162a] border border-berry/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto glow-berry"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-berry/20 bg-[#0e0e1a]">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-berry animate-pulse" />
            <span className="font-mono text-berry text-xs tracking-[0.3em] uppercase">{card.phase}</span>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-cream/30 hover:text-berry transition-colors text-xs tracking-widest"
            aria-label="Close modal"
          >
            [ESC]
          </button>
        </div>

        {/* Media */}
        <div className="relative">
          {card.videoUrl && isLocalVideo(card.videoUrl) ? (
            <video
              className="w-full max-h-64 object-cover"
              src={card.videoUrl}
              controls
              muted
              autoPlay
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
              src={card.image}
              alt={card.label}
              className="w-full object-cover max-h-64"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="font-display text-lg font-black text-cream uppercase tracking-wide mb-4">
            {card.label}
          </h2>
          <p className="font-mono text-sm text-cream leading-relaxed">{card.modalDescription}</p>
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
