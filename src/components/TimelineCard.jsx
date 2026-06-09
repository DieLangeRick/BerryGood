export default function TimelineCard({ card, onClick }) {
  return (
    <button
      onClick={() => onClick(card)}
      className="flex-shrink-0 w-64 bg-surface border border-berry/15 rounded-lg overflow-hidden
                 hover:border-berry/50 hover:glow-berry transition-all duration-300 cursor-pointer text-left group"
    >
      <div className="relative overflow-hidden">
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-36 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <span className="absolute top-2 left-2 font-mono text-xs text-berry bg-void/90 border border-berry/30 px-2 py-0.5">
          {card.phase}
        </span>
      </div>

      <div className="p-4 border-t border-berry/10">
        <h3 className="font-display text-xs font-bold text-cream uppercase tracking-widest mb-2">
          {card.label}
        </h3>
        <p className="font-mono text-xs text-cream/35 leading-relaxed line-clamp-2">
          {card.description}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-berry/70 text-xs font-mono group-hover:text-berry transition-colors">
          <span>VIEW LOG</span>
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </button>
  );
}
