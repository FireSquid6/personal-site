import { Layout } from "inkdocs";
import Root from "../components/root";

const LandingLayout: Layout = (children, metadata) => {
  const experiences = metadata.experience as Experience[];
  return (
    <Root>
      <>
        <AboutSection children={children} />
        <ExperienceSection experiences={experiences} />
        <LinkSection />
      </>
    </Root>
  );
};

function AboutSection(props: { children: JSX.Element }) {
  return (
    <div class="flex flex-col md:flex-row w-full pb-16">
      <div class="content w-full" id="content">
        {props.children}
      </div>
      <div class="w-full mx-auto h-[200px] max-w-[500px] relative">
        <ProfileImage
          class="top-[calc(40%-75px)] left-[calc(40%-75px)]"
          src="/firesquid.png"
        />
        <ProfileImage
          class="absolute top-[calc(30%-75px)] left-[calc(60%-75px)]"
          src="/self.jpg"
        />
      </div>
    </div>
  );
}

interface Experience {
  title?: string;
  description?: string;
  date?: string;
  href?: string;
  type?: "work" | "education";
}

function ExperienceSection(props: { experiences: Experience[] }) {
  const work = props.experiences.filter((exp) => exp.type === "work");
  const education = props.experiences.filter((exp) => exp.type === "education");
  return (
    <div class="pt-16">
      <h1 class="text-red1 text-4xl text-center">Experience</h1>
      <div class="mt-8">
        <h2>Work</h2>
        <hr class="mb-8" />
        <div class="flex flex-col">
          {work.map((exp) => (
            <Experience {...exp} />
          ))}
        </div>
      </div>
      <div class="mt-8">
        <h2>Education</h2>
        <hr class="mb-8" />
        <div class="flex flex-col">
          {education.map((exp) => (
            <Experience {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience(props: Experience) {
  return (
    <a
      href={props.href}
      class="py-8 mr-full text-fg hover:text-fg hover:translate-x-5"
    >
      <h3 class="text-blue">
        {props.type === "education" ? "🏫" : "🏢"} {props.title ?? "Untitiled"}
      </h3>
      <p>{props.description ?? "no description"}</p>
      <p>{props.date ?? "Ongoing"}</p>
    </a>
  );
}

function ProfileImage(props: { src: string; class: string }) {
  return (
    <img
      class={`rounded-full border-2 border-fg relative ${props.class}`}
      width={150}
      height={150}
      src={props.src}
    />
  );
}

function LinkSection() {
  const links = [
    {
      href: "https://www.linkedin.com/in/firesquid/",
      icon: "fa-brands fa-linkedin",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/firesquid6",
      icon: "fa-brands fa-github",
      alt: "Github",
    },
  ];

  return (
    <div>
      {links.map((link) => {
        <Link href={link.href} icon={link.icon} alt={link.alt} />;
      })}
    </div>
  );
}

function Link(props: { href: string; icon: string; alt: string }) {
  return (
    <a href={props.href}>
      <i class={props.icon} />
      <p class="sr-only">{props.alt}</p>
    </a>
  );
}

export default LandingLayout;
