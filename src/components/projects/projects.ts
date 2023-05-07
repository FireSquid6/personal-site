export interface Project {
  name: string;
  description: string;
  imagePath: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "gdvm",
    description: "A simple CLI tool to manage your godot projects",
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
    description: "This site",
    imagePath: "assets/images/projects/portfolio-site.png",
    githubUrl: "https://github.com/firesquid6/portfolio-site",
  },
  {
    name: "Bad Bank",
    description: "A cookie-cutter banking app made for my bootcamp",
    imagePath: "assets/images/projects/bad-bank.png",
    githubUrl: "https://github.com/firesquid6/bad-bank",
  },
  {
    name: "Poltergiest-Heist",
    description: "A game made with godot for the Godot Wild Jam",
    imagePath: "assets/images/projects/poltergiest-heist.png",
    githubUrl: "https://github.com/FireSquid6/Poltergeist-Heist",
  },
  {
    name: "Teleorb",
    description: "A short platformer made in GMS2",
    imagePath: "assets/images/projects/teleorb.png",
    githubUrl: "https://github.com/firesquid6/teleorb-classic",
  },
];
