import './Header.css';

export default function Header() {
  return (
    <header>
      <a data-testid="aboutLink" href="#about">About</a>
      <a data-testid="projectsLink" href="#projects">Projects</a>
      <a data-testid="experienceLink" href="#experience">Experience</a>
      <a data-testid="linksLink" href="#links">Links</a>
    </header>
  );
}