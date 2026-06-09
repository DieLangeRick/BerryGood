export const hero = {
  type: "video",
  src: "/timeline/1.mp4",
  title: "Aardbei",
  tagline: "An autonomous strawberry-picking robot",
};

export const intro = {
  text: "We are a group of students who designed and built an autonomous robot capable of identifying and picking strawberries from a plant. This is the story of how we made it happen.",
};

export const timelineCards = [
  {
    id: 1,
    phase: "Week 1",
    label: "First sketches",
    image: "/timeline/1.jpg",
    description: "We started by sketching out ideas for the robot arm and sensor layout.",
    modalDescription: "In the first week we explored multiple arm designs. Our main challenge was deciding between a 2-axis and 3-axis arm. We chose a 3-axis design for more precise positioning over the plant.",
    videoUrl: null,
  },
  {
    id: 2,
    phase: "Week 2",
    label: "First prototype",
    image: "/timeline/2.jpg",
    description: "We built the first physical prototype of the arm using basic materials.",
    modalDescription: "The first prototype taught us a lot. The main problem was rigidity — the arm flexed too much under its own weight. We reinforced the joints and added a counterweight in week 3.",
    videoUrl: null,
  },
  {
    id: 3,
    phase: "Week 4",
    label: "Adding sensors",
    image: "/timeline/3.jpg",
    description: "We integrated a camera and color detection to identify ripe strawberries.",
    modalDescription: "Getting color detection right under different lighting conditions was tricky. We experimented with HSV thresholds and eventually trained a small model to detect the red range reliably.",
    videoUrl: null,
  },
  {
    id: 4,
    phase: "Week 6",
    label: "Autonomous run",
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
