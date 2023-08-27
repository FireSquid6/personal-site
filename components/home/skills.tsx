"use client"

import { useState } from "react"

import { Skill, skills } from "@/lib/skillsArray"

export default function Skills() {
  const [slill, setSkill] = useState<Skill>({
    name: "Hover over something",
    icon: null,
    level: "Beginner",
    projects: [],
  })

  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h2 className="text-4xl font-bold">Hover over something</h2>
        <div></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="m-2 p-2 bg-bg_dark border-fg border rounded-lg hover:cursor-pointer hover:text-green hover:border-green hover:-translate-y-2 transition-all"
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  )
}
