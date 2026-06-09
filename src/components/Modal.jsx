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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        data-testid="modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {card.videoUrl ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-t-2xl"
                src={`https://www.youtube.com/embed/${getYouTubeId(card.videoUrl)}`}
                title={card.label}
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={card.image}
              alt={card.label}
              className="w-full rounded-t-2xl object-cover max-h-72"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 text-xl leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <span className="text-xs text-red-500 font-semibold uppercase tracking-wide">
            {card.phase}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-3">{card.label}</h2>
          <p className="text-gray-600 leading-relaxed">{card.modalDescription}</p>
        </div>
      </div>
    </div>
  );
}

function getYouTubeId(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : "";
}
