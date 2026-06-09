import { intro } from "../config/content";

export default function Intro() {
  return (
    <section className="py-24 px-6 bg-cream bg-circuit">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-berry/30" />
          <span className="font-mono text-berry text-xs tracking-[0.3em] uppercase">Introductie</span>
          <div className="h-px flex-1 bg-berry/30" />
        </div>
        <p className="font-mono text-ink/70 text-sm leading-relaxed text-center">
          {intro.text}
        </p>
      </div>
    </section>
  );
}
