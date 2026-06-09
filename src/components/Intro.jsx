import { intro } from "../config/content";

export default function Intro() {
  return (
    <section className="py-24 px-6 bg-void bg-circuit">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-berry/20" />
          <span className="font-mono text-berry text-xs tracking-[0.3em] uppercase">Mission Brief</span>
          <div className="h-px flex-1 bg-berry/20" />
        </div>
        <p className="font-mono text-cream/60 text-sm leading-relaxed text-center">
          {intro.text}
        </p>
      </div>
    </section>
  );
}
