export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  skills: string[];
  url: string;
}

export const projects: Project[] = [
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
];
