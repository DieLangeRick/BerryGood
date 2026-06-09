import { hero } from "../config/content";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-void bg-circuit">
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-scan w-full h-px bg-gradient-to-r from-transparent via-berry/40 to-transparent" />
      </div>

      {hero.type === "video" ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={hero.src}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src={hero.src}
          alt="Hero background"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />

      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-6xl md:text-8xl font-black text-cream text-glow mb-4 uppercase tracking-tight">
          {hero.title}
        </h1>

        <div className="text-4xl mb-5 select-none">🍓</div>

        <p className="font-serif italic text-cream/60 text-xl md:text-2xl max-w-sm mx-auto leading-relaxed">
          {hero.tagline}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-berry/60 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
