"use client"

export default function Projects() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Project
        title="Teleorb"
        description="A game about a teleporting orb"
        image="https://placehold.co/1280x1280"
        url="https://github.com/firesquid6/teleorb"
      />
      <Project
        title="Teleorb"
        description="A game about a teleporting orb"
        image="https://placehold.co/1280x1280"
        url="https://github.com/firesquid6/teleorb"
      />

      <Project
        title="Teleorb"
        description="A game about a teleporting orb"
        image="https://placehold.co/1280x1280"
        url="https://github.com/firesquid6/teleorb"
      />
      <Project
        title="Teleorb"
        description="A game about a teleporting orb"
        image="https://placehold.co/1280x1280"
        url="https://github.com/firesquid6/teleorb"
      />
      <Project
        title="Teleorb"
        description="A game about a teleporting orb"
        image="https://placehold.co/1280x1280"
        url="https://github.com/firesquid6/teleorb"
      />
    </section>
  )
}

interface ProjectProps {
  title: string
  description: string
  image: string
  url: string
}

function Project(props: ProjectProps) {
  return (
    <div className="hover:-translate-y-1 w-[25rem] h-[35rem] border-fg border-2 rounded-xl transition-all bg-bg_dark mx-auto my-8">
      <img
        className="object-cover w-full h-[25rem] rounded-t-xl border-b-fg border-b-2"
        src={props.image}
      />
      <div className="m-2">
        <a className="text-2xl hover:cursor-pointer font-bold">{props.title}</a>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
