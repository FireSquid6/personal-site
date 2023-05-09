export interface Project {
  name: string;
  description: string;
  imagePath: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "gdvm",
    description:
      "A simple CLI tool to manage your godot projects. It's made with node.js.",
    imagePath: "assets/images/projects/gdvm.png",
    githubUrl: "https://github.com/firesquid6/gdvm",
  },
  {
    name: "Dodge roll",
    description: "A game made with godot for the GMTK Game Jam 2023",
    imagePath: "assets/images/projects/dodge-roll.png",
    githubUrl: "https://github.com/firesquid6/dodge-roll",
  },
  {
    name: "Portfolio Site",
    description: "This site. It's made using React, Vite, and Typescript.",
    imagePath: "assets/images/projects/portfolio-site.png",
    githubUrl: "https://github.com/firesquid6/portfolio-site",
  },
  {
    name: "Bad Bank",
    description:
      "A cookie-cutter banking app made for my bootcamp. The frontend is made with React, Bootstrap, and Typescript. The backend is handled by supabase.",
    imagePath: "assets/images/projects/bad-bank.png",
    githubUrl: "https://github.com/firesquid6/bad-bank",
  },
  {
    name: "Poltergiest-Heist",
    description:
      "A puzzle-platformer made with godot in one week for the Godot Wild Jam",
    imagePath: "assets/images/projects/poltergiest-heist.png",
    githubUrl: "https://github.com/FireSquid6/Poltergeist-Heist",
  },
  {
    name: "Teleorb",
    description:
      "A speedrun based platformer based around a teleporting orb made in GMS2.3",
    imagePath: "assets/images/projects/teleorb.png",
    githubUrl: "https://github.com/firesquid6/teleorb-classic",
  },
];
