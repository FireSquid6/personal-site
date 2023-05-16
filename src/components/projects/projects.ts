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
      "A simple CLI tool similar to nvm, but for godot. It allows you to easily install and switch between godot versions. It is built in node.js",
    imagePath: "assets/images/projects/gdvm.svg",
    githubUrl: "https://github.com/firesquid6/gdvm",
  },
  {
    name: "Dodge roll",
    description:
      "A top-down shooter made with godot for the GMTK Game Jam 2023. It took two days to finish. All assets and code were created by me.",
    imagePath: "assets/images/projects/dodge_roll.png",
    githubUrl: "https://github.com/firesquid6/dodge-roll",
  },
  {
    name: "Portfolio Site",
    description:
      "This site. I've remade it serveral times. It was originally built with hugo, but now uses vite, react, and typescript.",
    imagePath: "assets/images/projects/firesquid.png",
    githubUrl: "https://github.com/firesquid6/portfolio-site",
  },
  {
    name: "Bad Bank",
    description:
      "A cookie-cutter banking app made for my bootcamp. The frontend is made with React, Bootstrap, and Typescript. The backend is handled by supabase.",
    imagePath: "assets/images/projects/mitxpro.png",
    githubUrl: "https://github.com/firesquid6/bad-bank",
  },
  {
    name: "Poltergiest-Heist",
    description:
      "A puzzle-platformer made with godot in one week for the Godot Wild Jam. I had help with the sound from HASTY.",
    imagePath: "assets/images/projects/poltergeist_heist.png",
    githubUrl: "https://github.com/FireSquid6/Poltergeist-Heist",
  },
  {
    name: "Teleorb",
    description:
      "A speedrun based platformer based around a teleporting orb made in GMS2.3. This was my first experience with programming in 2019 and 2020.",
    imagePath: "assets/images/projects/teleorb.png",
    githubUrl: "https://github.com/firesquid6/teleorb-classic",
  },
];
