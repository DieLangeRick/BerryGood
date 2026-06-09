export const hero = {
  type: "video",
  src: "/timeline/1.mp4",
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
    description: "In deze weken zijn veel plannen gemaakt. Sommige zijn zelfs uitgevoerd." ,
    modalDescription: "In the first week we explored multiple arm designs. Our main challenge was deciding between a 2-axis and 3-axis arm. We chose a 3-axis design for more precise positioning over the plant.",
    videoUrl: null,
  },
  {
    id: 2,
    phase: "Week 4-5",
    label: "Prototype",
    image: "/timeline/2.jpg",
    description: "We built the first physical prototype of the arm using basic materials.",
    modalDescription: "The first prototype taught us a lot. The main problem was rigidity — the arm flexed too much under its own weight. We reinforced the joints and added a counterweight in week 3.",
    videoUrl: null,
  },
  {
    id: 3,
    phase: "Week 6-7",
    label: "Realisatie",
    image: "/timeline/3.jpg",
    description: "We integrated a camera and color detection to identify ripe strawberries.",
    modalDescription: "Getting color detection right under different lighting conditions was tricky. We experimented with HSV thresholds and eventually trained a small model to detect the red range reliably.",
    videoUrl: null,
  },
  {
    id: 4,
    phase: "Week 8-9",
    label: "Afronding",
    image: "/timeline/4.jpg",
    description: "The robot completed its first fully autonomous strawberry pick.",
    modalDescription: "The first successful autonomous run was a huge milestone. We tuned the PID controller for arm movement and refined the pick timing. The robot now reliably identifies and picks strawberries without human input.",
    videoUrl: "/timeline/week 8-9.mp4",
  },
  {
    id: 5,
    phase: "Week 10",
    label: "Afronding",
    image: "/timeline/4.jpg",
    description: "The robot completed its first fully autonomous strawberry pick.",
    modalDescription: "The first successful autonomous run was a huge milestone. We tuned the PID controller for arm movement and refined the pick timing. The robot now reliably identifies and picks strawberries without human input.",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

export const team = {
  school: "NHL Stenden Hogeschool",
  year: "2025–2026",
  members: ["Rick Wassink", "Sander Broekhof", "Sven Terpstra", "Bouwe Westert", "Tim Groen", "Tieme van Reenen", "Jelle Douma", "Hessel Zijlstra", "Nick Groen"],
};
