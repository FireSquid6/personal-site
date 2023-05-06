export interface Thing {
  name: string;
  tech: Tech[];
}
export interface Tech {
  name: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
}

export const things: Thing[] = [
  {
    name: "build websites",
    tech: [
      {
        name: "HTML",
        proficiency: 4,
      },
      {
        name: "CSS",
        proficiency: 3,
      },
      {
        name: "Javascript",
        proficiency: 4,
      },
      {
        name: "Typescript",
        proficiency: 3,
      },
      {
        name: "Hugo",
        proficiency: 4,
      },
      {
        name: "React",
        proficiency: 3,
      },
    ],
  },
  {
    name: "create solutions",
    tech: [
      {
        name: "Python",
        proficiency: 4,
      },
      {
        name: "Rust",
        proficiency: 1,
      },
      {
        name: "Node.js",
        proficiency: 4,
      },
    ],
  },
  {
    name: "make games",
    tech: [
      {
        name: "Gamemaker Studio 2",
        proficiency: 5,
      },
      {
        name: "Godot",
        proficiency: 5,
      },
    ],
  },
  {
    name: "develop apps",
    tech: [
      {
        name: "Electron",
        proficiency: 4,
      },
      {
        name: "Tauri",
        proficiency: 1,
      },
      {
        name: "Typer",
        proficiency: 3,
      },
    ],
  },
];
