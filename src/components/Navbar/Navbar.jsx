import React, { useRef, useEffect } from "react";
import "./Navbar.scss";

export default function Navbar({ activeSection }) {
  const navContainerRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const activeLink = document.querySelector(".nav__link--active");
    if (activeLink && navContainerRef.current && indicatorRef.current) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = navContainerRef.current.getBoundingClientRect();
      indicatorRef.current.style.width = `${linkRect.width}px`;
      indicatorRef.current.style.left = `${linkRect.left - navRect.left}px`;
      indicatorRef.current.style.opacity = "1";
    } else if (indicatorRef.current) {
      indicatorRef.current.style.opacity = "0";
    }
  }, [activeSection]);

  return (
    <header className="header">
      <div className="header__left">
        <a href="#about" className="header__logo">
          Samuel<span>Lazarin</span>
        </a>
      </div>
      <div className="header__center">
        <div className="header__profile-img">
          <div className="img-placeholder">
            <img src="favicon.png" alt="Perfil" />
          </div>
        </div>
      </div>
      <div className="header__right">
        <nav className="nav" id="mainNav" ref={navContainerRef}>
          <ul className="nav__list">
            <li>
              <a
                href="#about"
                className={`nav__link ${activeSection === "about" ? "nav__link--active" : ""}`}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav__link ${activeSection === "projects" ? "nav__link--active" : ""}`}
              >
                Projetos
              </a>
            </li>
            {/* Link para Habilidades adicionado */}
            <li>
              <a
                href="#skills"
                className={`nav__link ${activeSection === "skills" ? "nav__link--active" : ""}`}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav__link ${activeSection === "contact" ? "nav__link--active" : ""}`}
              >
                Contato
              </a>
            </li>
          </ul>
          <span className="nav__indicator" ref={indicatorRef}></span>
        </nav>
      </div>
    </header>
  );
}
