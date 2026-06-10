export default function TimelineCard({ card, onClick }) {
  return (
    <button
      onClick={() => onClick(card)}
      className={`flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer text-left group shadow-md border ${card.isCurrent ? "border-berry shadow-[0_0_0_1px_rgba(232,41,74,0.3)]" : "border-gray-200 hover:border-berry/50"}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 font-mono text-xs text-berry bg-white/90 border border-berry/30 px-2 py-0.5">
          {card.phase}
        </span>
        {card.isCurrent && (
          <span className="absolute top-2 right-2 flex items-center gap-1 font-mono text-xs text-white bg-berry px-2 py-0.5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            NU
          </span>
        )}
      </div>

      <div className="p-4 border-t border-ink/8">
        <h3 className="font-display text-xs font-bold text-ink uppercase tracking-widest mb-2">
          {card.label}
        </h3>
        <p className="font-mono text-[10px] text-ink/50 leading-relaxed line-clamp-2">
          {card.description}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-berry/60 text-xs font-mono group-hover:text-berry transition-colors">
          <span>Bekijk week</span>
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </button>
  );
}
