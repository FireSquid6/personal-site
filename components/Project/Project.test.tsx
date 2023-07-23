import Project from "./Project";
import { Project as ProjectType } from "@/components/ProjectDisplay/projects";
import { render, screen } from "@testing-library/react";

describe("Project", () => {
  const project: ProjectType = {
    title: "Test Project",
    description: "This is a test project",
    imageUrl: "https://via.placeholder.com/150",
    url: "https://www.google.com",
    skills: ["React", "TypeScript", "Jest"],
  };
});
