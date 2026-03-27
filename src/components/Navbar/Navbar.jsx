import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";

export default function Navbar({ activeSection }) {
  const { t, i18n } = useTranslation();
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
  }, [activeSection, i18n.language]);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__left">
        <a href="#about" className="header__logo">
          Samuel<span>Lazarin</span>
        </a>
      </div>

      <div className="header__center"></div>

      <div className="header__right">
        <nav className="nav" id="mainNav" ref={navContainerRef}>
          <ul className="nav__list">
            <li>
              <a
                href="#about"
                className={`nav__link ${activeSection === "about" ? "nav__link--active" : ""}`}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav__link ${activeSection === "projects" ? "nav__link--active" : ""}`}
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav__link ${activeSection === "skills" ? "nav__link--active" : ""}`}
              >
                {t("navbar.skills")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav__link ${activeSection === "contact" ? "nav__link--active" : ""}`}
              >
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
          <span className="nav__indicator" ref={indicatorRef}></span>
        </nav>

        {/* Seletor limpo, usando a classe do CSS agora */}
        <select
          className="nav__lang-select"
          onChange={handleLanguageChange}
          defaultValue={i18n.resolvedLanguage || "pt"}
        >
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
  );
}
