import { Project as ProjectType } from "@/components/ProjectDisplay/projects";
import Link from "next/link";

export default function Project(project: ProjectType) {
  return (
    <Link
      href={project.url}
      target="_blank"
      className="bg-bg_dark border-fg border p-4 rounded-xl text-fg hover:text-fg hover:bg-bg_highlight hover:-translate-y-2"
    >
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
      </div>
    </Link>
  );
}
