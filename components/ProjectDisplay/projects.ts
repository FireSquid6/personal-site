export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  skills: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Inkdocs",
    description:
      "An incredibly fast documentation site builder that can be used as a replacement for docusaurus and starlight. Rejects the idea that you need React to make a component based frontend. Currently in development",
    skills: ["Typescript", "Bun", "HTML", "CSS"],
    url: "https://github.com/firesquid6/inkdocs",
    imageUrl: "/images/inkdocs.png",
  },
  {
    title: "Negtd",
    description:
      "A text based todo list app. It uses a modified system of GTD to help you get things done.",
    skills: ["Linux", "Go"],
    url: "https://github.com/firesquid6/negtd",
    imageUrl: "/images/negtd.png",
  },
  {
    title: "Powertool",
    description:
      "A command line tool for quickly creating projects. Has a built in rofi meny for selecting templates. Currently in development",
    skills: ["Linux", "Go"],
    url: "https://github.com/firesquid6/powertool",
    imageUrl: "/images/powertool.png",
  },
  {
    title: "This Website",
    description:
      "I've rebuilt this website three times. It was originally a Hugo site, then I remade it as an SPA with react and vite, and now I'm remaking it again with NextJS and tailwind",
    skills: ["React", "NextJS", "Vite", "TailwindCSS", "Vitest", "Typescript"],
    url: "https://github.com/firesquid6/portfolio-site",
    imageUrl: "/images/portfolio-site.png",
  },
  {
    title: "Cyberbook",
    description:
      "A note taking app I made for primarily my own use. It provides a way for you to index and search through phyiscal notes you've written",
    skills: [
      "React",
      "NextJS",
      "TailwindCSS",
      "Vitest",
      "Typescript",
      "Firebase",
    ],
    url: "https://github.com/firesquid6/cyberbook",
    imageUrl: "/images/cyberbook.png",
  },
  {
    title: "gdvm",
    description:
      "A version management cli tool for the godot game engine. It allows you to easily install and switch between different versions",
    skills: ["node.js", "javascript"],
    url: "https://github.com/firesquid6/gdvm",
    imageUrl: "/images/gdvm.png",
  },
  {
    title: "Mathworld",
    description:
      "A game I worked on at my internship while in high school. It's a math based puzzle game designed to teach elementary schoolers the basics of arithimatic",
    skills: ["Godot", "GDScript", "Git"],
    url: "https://github.com/sindrsh/mathworld",
    imageUrl: "/images/mathworld.png",
  },
  {
    title: "Dodge Roll",
    description: "A top down shooter built in Godot for the GMTK game jam",
    skills: ["Godot", "GDScript"],
    url: "https://github.com/firesquid6/dodge-roll",
    imageUrl: "/images/dodge-roll.png",
  },
  {
    title: "Poltergeist Heist",
    description:
      "A game made for the Godot Wild Jam. It's a 2d puzzle platformer about controlling multiple ghosts.",
    skills: ["Godot", "GDScript"],
    url: "https://github.com/firesquid6/poltergeist-heist",
    imageUrl: "/images/poltergeist-heist.png",
  },
  {
    title: "Teleorb",
    description:
      "My first game! Created in Gamemaker Studio 2 while I was in 9th grade.",
    skills: ["Gamemaker Studio 2", "GML"],
    url: "https://github.com/firesquid6/teleorb-classic",
    imageUrl: "/images/teleorb.png",
  },
];
