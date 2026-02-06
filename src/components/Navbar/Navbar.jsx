import React from "react";
import "./_navbar.scss";
import ThemeToggle from "../TheToggle/ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#about">{"Samuel Lazarin"}</a>
      </div>

      <ul className="navbar__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a
            href="https://github.com/Lazarin123/samuel-portifolio"
            target="_blank"
          >
            Code Project
          </a>
        </li>
        <li>
          <a href="#about">Sobre Mim</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
