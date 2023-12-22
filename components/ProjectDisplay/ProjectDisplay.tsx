import { projects } from "./projects";
import Project from "../Project/Project";

export default function ProjectDisplay() {
  let i = 0;
  return (
    <div className="my-16">
      <h1 className="text-5xl text-center my-4">I've built:</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {projects.map((project) => {
          i += 1;
          return (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              url={project.url}
              skills={project.skills}
            />
          );
        })}
      </div>
    </div>
  );
}
