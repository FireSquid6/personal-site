export interface Project {
  name: string;
  description: string;
  imagePath: string;
  githubUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    name: "gdvm",
    description: "A simple CLI tool to manage your godot projects",
    imagePath: "assets/images/projects/gdvm.png",
    githubUrl: "https://github.com/firesquid6/gdvm",
    technologies: ["NodeJS", "JavaScript"],
  },
  {
    name: "Dodge roll",
    description: "A game made with godot for the GMTK Game Jam 2023",
    imagePath: "assets/images/projects/dodge-roll.png",
    githubUrl: "https://github.com/firesquid6/dodge-roll",
    technologies: ["Godot"],
  },
  {
    name: "Portfolio Site",
    description: "This site",
    imagePath: "assets/images/projects/portfolio-site.png",
    githubUrl: "https://github.com/firesquid/portfolio-site",
    technologies: [
      "Vite",
      "NodeJS",
      "TypeScript",
      "React",
      "CSS",
      "HTML",
      "Hugo",
    ],
  },
  {
    name: "Bad Bank",
    description: "A cookie-cutter banking app made for my bootcamp",
    imagePath: "assets/images/projects/bad-bank.png",
    githubUrl: "https://github.com/firesquid6/bad-bank",
    technologies: [
      "Vite",
      "NodeJS",
      "TypeScript",
      "React",
      "CSS",
      "HTML",
      "Supabase",
    ],
  },
  {
    name: "Poltergiest-Heist",
    description: "A game made with godot for the Godot Wild Jam",
    imagePath: "assets/images/projects/poltergiest-heist.png",
    githubUrl: "https://github/com/firesquid6/poltergiest-heist",
    technologies: ["Godot"],
  },
  {
    name: "Teleorb",
    description: "A short platformer made in GMS2",
    imagePath: "assets/images/projects/teleorb.png",
    githubUrl: "https://github.com/firesquid6/teleorb-classic",
    technologies: ["Game Maker Studio 2"],
  },
];
