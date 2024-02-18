import { Layout } from "inkdocs";
import Root from "../components/root";

const ProjectsLayout: Layout = (children, metadata) => {
  const projects = metadata.projects as Project[];
  const firstPriority: Project[] = [];
  const secondPriority: Project[] = [];
  const bin: Project[] = [];

  for (const project of projects) {
    switch (project.priority) {
      case 1:
        firstPriority.push(project);
        break;
      case 2:
        secondPriority.push(project);
        break;
      default:
        bin.push(project);
    }
  }

  return (
    <Root>
      <div class="flex flex-col" id="content">
        <h1>Big Projects</h1>
        <p>Large open source projects + actual work</p>
        <hr class="mb-8" />
        <div class="flex flex-col">
          {firstPriority.map((project) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                href={project.href}
                status={project.status}
                technologies={project.technologies}
              />
            );
          })}
        </div>

        <h1>Smaller Projects</h1>
        <p>Games, cookie-cutter projects, etc.</p>
        <hr class="mb-8" />
        <div class="flex flex-col">
          {secondPriority.map((project) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                href={project.href}
                status={project.status}
                technologies={project.technologies}
              />
            );
          })}
        </div>

        <h1>The Bin</h1>
        <p>Abandoned / Worthless projects</p>
        <hr class="mb-8" />
        <div class="flex flex-col">
          {bin.map((project) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                href={project.href}
                status={project.status}
                technologies={project.technologies}
              />
            );
          })}
        </div>
      </div>
    </Root>
  );
};

function Project(props: Project) {
  const project = props;

  return (
    <a
      class="mb-8 hover:translate-x-5 hover:shadow-bg_dark hover:shadow-xl hover:border-fg"
      href={project.href ?? "#"}
    >
      <h2 class="text-fg text-2xl">{project.title ?? "untitiled"}</h2>
      <p class="italic text-fg_dark">
        {project.description ?? "no description provided"}
      </p>

      <ul class="my-2 text-teal md:flex md:flex-row">
        {project.technologies?.map((tech) => {
          return (
            <li class="text-teal md:mr-4"> {technologies.get(tech) ?? tech}</li>
          );
        })}
      </ul>
      <p class="text-fg font-bold">{project.status ?? "⚫ Status Unkown"}</p>
    </a>
  );
}

interface Project {
  title?: string;
  description?: string;
  href?: string;
  status?: string;
  technologies?: string[];
  priority?: number;
}

// look werid? This requires a nerd font to work properly. It'll work fine on the actual site
const technologies = new Map<string, string>([
  ["elysia", "Elysia"],
  ["bun", "Bun"],
  ["tailwind", "󱏿 TailwindCSS"],
  ["htmx", " HTMX"],
  ["inkdocs", "Inkdocs"],
  ["linux", " Linux"],
  ["nix", "󱄅 Nix"],
  ["godot", " Godot"],
  ["go", "󰟓 Go"],
  ["react", "󰜈 React"],
  ["next", "Next.JS"],
  ["typescript", "󰛦 TypeScript"],
  ["firebase", "󰥧 Firebase"],
  ["gms2", "GameMaker Studio 2"],
]);

export default ProjectsLayout;
