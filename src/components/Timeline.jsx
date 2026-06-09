import { timelineCards } from "../config/content";
import TimelineCard from "./TimelineCard";

export default function Timeline({ onCardClick }) {
  return (
    <section className="py-20 bg-[#2a2a3e] bg-circuit-dark">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-berry" />
          <span className="font-mono text-berry text-xs tracking-[0.3em] uppercase">Development Log</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
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
