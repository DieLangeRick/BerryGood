import { intro } from "../config/content";

export default function Intro() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center">
      <p className="text-lg text-gray-700 leading-relaxed">{intro.text}</p>
    </section>
  );
}
