import Projects from "@/components/home/projects"
import Skills from "@/components/home/skills"
import Tagline from "@/components/home/tagline"
import Contact from "@/components/home/contact" 


export default function Home() {
  return (
    <>
      <Tagline />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
