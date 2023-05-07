import ProjectCard from "./project-card/ProjectCard";
import "./Projects.css";
import { projects } from "./projects";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Some stuff I've built: </h2>
      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
}
