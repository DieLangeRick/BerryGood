export default function TimelineCard({ card, onClick }) {
  return (
    <button
      onClick={() => onClick(card)}
      className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer text-left"
    >
      <img
        src={card.image}
        alt={card.label}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <span className="text-xs text-red-500 font-semibold uppercase tracking-wide">
          {card.phase}
        </span>
        <h3 className="font-bold text-gray-900 mt-1">{card.label}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{card.description}</p>
      </div>
    </button>
  );
}
