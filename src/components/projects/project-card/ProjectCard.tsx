import './ProjectCard.css';


export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src="https://via.placeholder.com/300" alt="project" />
      </div>
      <div className="project-card__info">
        <h3>Project Name</h3>
        <p>Project Description</p>
      </div>
    </div>
  );
}