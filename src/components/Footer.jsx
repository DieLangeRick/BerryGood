import { team } from "../config/content";

export default function Footer() {
  return (
    <footer className="bg-void border-t border-berry/15 py-14 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-berry/15" />
          <span className="text-2xl select-none">🍓</span>
          <div className="h-px flex-1 bg-berry/15" />
        </div>

        <p className="font-mono text-xs text-cream/25 uppercase tracking-[0.3em] mb-5">De mannen en Tim</p>

        <ul className="flex flex-wrap justify-center gap-6 mb-6">
          {team.members.map((member, i) => (
            <li key={i} className="font-display text-sm text-cream/60 uppercase tracking-widest">
              {member}
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-cream/20">
          {team.school} · {team.year}
        </p>
      </div>
    </footer>
  );
}
