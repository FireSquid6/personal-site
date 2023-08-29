import {
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi"
import { FaLinux, FaPython, FaRust } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { RiSupabaseFill } from "react-icons/ri"
import {
  SiCss3,
  SiGodotengine,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVim,
  SiVisualstudiocode,
  SiVitest,
} from "react-icons/si"

export interface Skill {
  name: string
  info?: string
  icon: React.ReactNode
  level: "Beginner" | "Intermediate" | "Advanced" | ""
  projects: string[]
}

const size = 64
export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size={size} />,
    level: "Intermediate",
    projects: ["this website", "matchmake.ink", "gdvm"],
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript size={size} />,
    level: "Intermediate",
    projects: ["this website", "matchmake.ink", "powertool", "Cyberbook"],
  },
  {
    name: "React",
    icon: <BiLogoReact size={size} />,
    level: "Intermediate",
    projects: ["this website", "matchmake.ink", "powertool", "Cyberbook"],
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={size} />,
    level: "Intermediate",
    projects: ["this website", "matchmake.ink", "Cyberbook"],
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={size} />,
    level: "Advanced",
    projects: ["this website", "matchmake.ink", "Cyberbook"],
  },
  {
    name: "Vim",
    icon: <SiVim size={size} />,
    level: "Intermediate",
    projects: [],
  },
  {
    name: "Vitest",
    icon: <SiVitest size={size} />,
    level: "Beginner",
    projects: ["matchmake.ink"],
  },
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode size={size} />,
    level: "Advanced",
    projects: [],
  },
  {
    name: "Linux",
    icon: <FaLinux size={size} />,
    level: "Advanced",
    info: "I daily drive linux mint with the i3 tiling window manager",
    projects: [],
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs size={size} />,
    level: "Advanced",
    projects: ["this website", "matchmake.ink", "powertool", "Cyberbook"],
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={size} />,
    level: "Beginner",
    projects: [],
  },
  {
    name: "HTML5",
    icon: <SiHtml5 size={size} />,
    level: "Advanced",
    projects: ["this website", "matchmake.ink", "powertool", "Cyberbook"],
  },
  {
    name: "CSS3",
    icon: <SiCss3 size={size} />,
    level: "Intermediate",
    projects: ["this website", "matchmake.ink", "powertool", "Cyberbook"],
  },
  {
    name: "Python",
    icon: <FaPython size={size} />,
    level: "Intermediate",
    projects: ["gdvm"],
  },
  {
    name: "Rust",
    icon: <FaRust size={size} />,
    level: "Beginner",
    projects: [],
  },
  {
    name: "Godot",
    icon: <SiGodotengine size={size} />,
    level: "Beginner",
    projects: ["Poltergeist Heist", "Dodge Roll"],
  },
  {
    name: "Firebase",
    icon: <BiLogoFirebase size={size} />,
    level: "Intermediate",
    projects: ["matchmake.ink", "Cyberbook"],
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill size={size} />,
    level: "Intermediate",
    projects: [],
  },
]
