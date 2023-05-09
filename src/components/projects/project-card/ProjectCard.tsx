import "./ProjectCard.css";
import { Project } from "../projects";

export default function ProjectCard({
  name,
  description,
  imagePath,
  githubUrl,
}: Project) {
  return (
    <div className="project-card-container">
      <a className="project-card" href={githubUrl} target="_blank">
        <div className="project-card__image">
          <img src="https://via.placeholder.com/300" alt="project" />
        </div>
        <div className="project-card__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
