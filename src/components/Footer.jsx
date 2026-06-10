import { team } from "../config/content";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/10 py-14 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-berry/20" />
          <span className="text-2xl select-none">🍓</span>
          <div className="h-px flex-1 bg-berry/20" />
        </div>

        <p className="font-mono text-xs text-ink/30 uppercase tracking-[0.3em] mb-5">Het team</p>

        <ul className="flex flex-wrap justify-center gap-6 mb-6">
          {team.members.map((member, i) => (
            <li key={i} className="font-display text-sm text-ink/70 uppercase tracking-widest">
              {member}
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-ink/30">
          {team.school} · {team.year}
        </p>
      </div>
    </footer>
  );
}
