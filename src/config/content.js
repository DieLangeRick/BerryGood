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
    description: "Voor elk onderdeel werd een prototype gerealiseerd ",
    modalDescription: "Voor vrijwel elk onderdeel van onze robot hebben we eerst een prototype gebouwd voordat we aan de definitieve versie begonnen. Zo konden we ideeën snel testen, feedback ophalen binnen het team en zekerheid krijgen dat onze keuzes werkten in de praktijk. Een goed voorbeeld hiervan is de gripper. We zijn begonnen met een mock-up van de uiteindelijke gripper, zodat we de werking en het ontwerp alvast konden controleren voordat de echte versie werd geproduceerd. Omdat we het concept van tevoren grondig hadden doorgedacht, liep dit traject soepel en hoefden we onderweg geen grote aanpassingen te doen. Deze aanpak eerst prototypen, dan definitief bouwen hebben we door het hele project toegepast, en het heeft ons veel tijd en onverwachte problemen bespaard.",
    videoUrl: "/timeline/prototype 2.mp4",
  },
  {
    id: 3,
    phase: "Week 6-7",
    label: "Realisatie",
    image: "/timeline/realisatie 1.jpeg",
    description: "Van idee naar ijzer, de robot begint vorm te krijgen.",
    modalDescription: "De robot bestaat uit een frame met een servo-aangedreven arm en gripper, aangestuurd door een Raspberry Pi 5 waarop het volledige systeem draait. Via een camera detecteert de robot aardbeien in real-time met een getraind YOLO11n-model, waarna het systeem automatisch de meest geschikte aardbei selecteert op basis van rijpheid en positie. De arm beweegt vervolgens naar de doelaardbei en de gripper plukt deze nauwkeurig van de plant.",
    videoUrl: "/timeline/realisatie 2.mp4",
  },
  {
    id: 4,
    phase: "Week 8-9",
    label: "Afronding",
    isCurrent: true,
    image: "/timeline/week 8-9.jpg",
    description: "De laatste details zijn afgewerkt en we zijn klaar voor de beoordeling ",
    modalDescription: "Tijdens de afronding werd de elektronica netjes in de behuizing gemonteerd en werden de laatste details zorgvuldig afgewerkt. Elk onderdeel werd gecontroleerd, losse eindjes werden weggewerkt en het systeem werd als geheel getest. Na al het werk van de afgelopen maanden konden we het project officieel als voltooid beschouwen.",
    videoUrl: "/timeline/week 8-9.mp4",
  },
  {
    id: 5,
    phase: "Week 10",
    label: "Beoordeling",
    image: "/timeline/rendering.jpg",
    description: "Het licht aan het einde van een goed verlichte tunnel.",
    modalDescription: "We zijn er bijna. Week 10 staat in het teken van de eindpresentatie en de wedstrijd. Dit hoofdstuk wordt binnenkort aangevuld.",
    videoUrl: "/timeline/Afronding video.mp4",
    videoMuted: false,
  },
];

export const team = {
  school: "NHL Stenden Hogeschool",
  year: "2025–2026",
  members: ["Rick Wassink", "Sander Broekhof", "Sven Terpstra", "Bouwe Westert", "Tim Groen", "Tieme van Reenen", "Jelle Douma", "Hessel Zijlstra", "Nick Groen"],
};
