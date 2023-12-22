import { Project as ProjectType } from "@/components/ProjectDisplay/projects";

export default function Project(project: ProjectType) {
  return (
    <div className="bg-bg_dark p-4 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-lg">{project.description}</p>
          {/* <div className="flex flex-row justify-center items-center"> */}
          {/*   {project.skills.map((skill) => { */}
          {/*     return ( */}
          {/*       <div className="flex flex-col justify-center items-center"> */}
          {/*         <p className="text-sm mx-4">{skill}</p> */}
          {/*       </div> */}
          {/*     ); */}
          {/*   })} */}
          {/* </div> */}
        </div>
        <div className="flex flex-row justify-center items-center">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-blue-500 hover:text-blue-700"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
