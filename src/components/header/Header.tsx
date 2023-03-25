import './Header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [headerActive, setHeaderActive] = useState(false)
  const handleClick = () => {
    setHeaderActive(!headerActive);
  }

  return (
    <header>
      <button className={`menuButton ${headerActive ? "tilt" : ""}`} onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
      </button>
      <div className={`headerLinks ${headerActive ? "active" : "inactive"}`}>
        <a data-testid="aboutLink" href="#about">About</a>
        <a data-testid="projectsLink" href="#projects">Projects</a>
        <a data-testid="experienceLink" href="#experience">Experience</a>
        <a data-testid="linksLink" href="#links">Links</a>
      </div>
    </header>
  );
}