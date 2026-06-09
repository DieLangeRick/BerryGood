import { timelineCards } from "../config/content";
import TimelineCard from "./TimelineCard";

export default function Timeline({ onCardClick }) {
  return (
    <section className="py-20 bg-[#e8e8ec]">
      <div className="px-6 mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-black text-ink uppercase tracking-tight">
          Week bij Week
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x snap-mandatory">
        {timelineCards.map((card) => (
          <TimelineCard key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}
