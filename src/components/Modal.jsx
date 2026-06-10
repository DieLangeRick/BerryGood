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
        className="bg-white border border-ink/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink/10 bg-cream">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-berry animate-pulse" />
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
              className="w-full max-h-64 object-cover"
              src={card.videoUrl}
              controls
              muted
              autoPlay
              playsInline
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
