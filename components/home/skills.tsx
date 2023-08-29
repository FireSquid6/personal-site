"use client"

import { useState } from "react"

import { Skill, skills } from "@/lib/skillsArray"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill>({
    name: "Hover over something",
    icon: null,
    level: "Beginner",
    projects: [],
  })

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full p-2 m-4 border border-green flex text-green">
        <h2 className="text-2xl">
          {hoveredSkill.name} - {hoveredSkill.level}
        </h2>
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
