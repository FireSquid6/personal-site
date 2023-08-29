"use client"

import { useState } from "react"

import { Skill, skills } from "@/lib/skillsArray"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill>({
    name: "Hover over something",
    icon: null,
    level: "",
    projects: [],
  })

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full p-4 m-4 border flex-col border-green flex text-fg h-32 rounded-lg bg-bg_dark">
        <h2 className="text-2xl my-2">
          <span className="text-yellow">{hoveredSkill.name}</span> -{" "}
          <span className="text-green">{hoveredSkill.level}</span>
        </h2>
        {hoveredSkill.info && <p>{hoveredSkill.info}</p>}
        <span className="h-full"></span>

        <ul className="flex flex-wrap">
          {hoveredSkill.projects.map((project) => (
            <div
              key={project}
              className="mr-2 bg-dark border-r border-l border-fg px-1"
            >
              {` ${project} `}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`m-2 p-2 bg-bg_dark border rounded-lg hover:cursor-pointer ${
              hoveredSkill.name === skill.name
                ? "text-green border-green -translate-y-2"
                : "border-fg"
            }  transition-all`}
            onMouseEnter={() => setHoveredSkill(skill)}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  )
}
