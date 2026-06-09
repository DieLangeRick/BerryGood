import { timelineCards } from "../config/content";
import TimelineCard from "./TimelineCard";

export default function Timeline({ onCardClick }) {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 px-6">
        Our Journey
      </h2>
      <div className="flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory">
        {timelineCards.map((card) => (
          <TimelineCard key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
