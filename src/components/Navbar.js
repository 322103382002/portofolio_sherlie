import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <span className="navbar-brand">Sherlie Angel</span>
      <ul className="navbar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button aria-label="Toggle theme" onClick={toggleTheme} className="theme-toggle">
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
