export const hero = {
  type: "video",
  src: "/timeline/1_small.mp4",
  title: "BerryGood",
  tagline: 'Berry Smooth x Berry Smart = BerryGood',
};

export const intro = {
  text: "Wij zijn een groep studenten die een autonome robot hebben ontworpen en gebouwd die aardbeien van een plant kan herkennen en plukken. Dit is hoe we dat voor elkaar hebben gekregen.",
};

export const timelineCards = [
  {
    id: 1,
    phase: "Week 1-3",
    label: "Bedenken",
    image: "/timeline/week 1-3.png",
    modalImage: "/timeline/Wtb Tekening.jpeg",
    description: "In deze weken zijn veel plannen gemaakt. Sommige zijn zelfs uitgevoerd." ,
    modalDescription: "Week 1-3 bestond voornamelijk uit overleg, planning en het maken van afspraken over toekomstig overleg en toekomstige planning. De voortgang was vooral theoretisch van aard, maar de verwachting was dat er op termijn ook daadwerkelijk gewerkt zou worden.",
    videoUrl: null,
  },
  {
    id: 2,
    phase: "Week 4-5",
    label: "Prototype",
    image: "/timeline/prototype1.jpeg",
    description: "We built the first physical prototype of the arm using basic materials.",
    modalDescription: "The first prototype taught us a lot. The main problem was rigidity — the arm flexed too much under its own weight. We reinforced the joints and added a counterweight in week 3.",
    videoUrl: "/timeline/prototype 2.mp4",
  },
  {
    id: 3,
    phase: "Week 6-7",
    label: "Realisatie",
    image: "/timeline/realisatie 1.jpeg",
    description: "We integrated a camera and color detection to identify ripe strawberries.",
    modalDescription: "Getting color detection right under different lighting conditions was tricky. We experimented with HSV thresholds and eventually trained a small model to detect the red range reliably.",
    videoUrl: "/timeline/realisatie 2.mp4",
  },
  {
    id: 4,
    phase: "Week 8-9",
    label: "Afronding",
    isCurrent: true,
    image: "/timeline/week 8-9.jpg",
    description: "The robot completed its first fully autonomous strawberry pick.",
    modalDescription: "Tijdens de afronding is de elektronica in de behuizing gemonteerd en zijn de laatste details afgewerkt. De puntjes op de i zijn gezet en het project kon als voltooid worden beschouwd.",
    videoUrl: "/timeline/week 8-9.mp4",
  },
  {
    id: 5,
    phase: "Week 10",
    label: "Afronding",
    image: "/timeline/4.jpg",
    description: "Dit hoofdstuk schrijven we nog. Komt binnenkort.",
    modalDescription: "We zijn er bijna. Week 10 staat in het teken van de eindpresentatie en de laatste tests. Dit hoofdstuk wordt binnenkort aangevuld.",
    videoUrl: null,
  },
];

export const team = {
  school: "NHL Stenden Hogeschool",
  year: "2025–2026",
  members: ["Rick Wassink", "Sander Broekhof", "Sven Terpstra", "Bouwe Westert", "Tim Groen", "Tieme van Reenen", "Jelle Douma", "Hessel Zijlstra", "Nick Groen"],
};
