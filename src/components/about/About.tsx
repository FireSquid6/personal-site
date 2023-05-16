import "./About.css"


interface AboutProps {
  title: string,
  subtitle: string
}


export default function About({title, subtitle}: AboutProps) {
  return (
    <div>
      <section id="about" className="about">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </section>
    </div>
  )
}