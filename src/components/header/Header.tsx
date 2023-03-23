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
      <div className="header-container">
        <div className="header-logo">
          <a href="/">Jonathan Deiss</a>
        </div>
        <div className="header-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}