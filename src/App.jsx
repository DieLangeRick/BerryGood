import { useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="bg-cream min-h-screen">
      <Hero />
      <Intro />
      <Timeline onCardClick={setSelectedCard} />
      <Footer />
      {selectedCard && (
        <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}
