import "./Experience.css";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>So far I have:</h2>
      <div className="experience__list">
        <ExperienceItem
          description="Graduated from MITxPro's MERN stack software engineering bootcamp"
          date="2022-2023"
          link="https://executive-ed.xpro.mit.edu/professional-certificate-coding"
          type="education"
        />
        <ExperienceItem
          description="Graduated from High School at Veritas Academy"
          date="2019-2024"
          link="https://www.veritasacademy.net/"
          type="education"
        />
        <ExperienceItem
          description="Worked at the now defunct Ginga Games as a level designer and game developer for the game 'Slippy Slider' in Godot"
          date="2022"
          link="https://github.com/gingagames"
          type="work"
        />
      </div>
    </section>
  );
}
