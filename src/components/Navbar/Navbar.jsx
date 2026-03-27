// import React, { useRef, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import "./Navbar.scss";

// export default function Navbar({ activeSection }) {
//   const { t, i18n } = useTranslation();
//   const navContainerRef = useRef(null);
//   const indicatorRef = useRef(null);

//   // Estados de controle
//   const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const langMenuRef = useRef(null);

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);
//     setIsLangMenuOpen(false);
//     setIsMobileMenuOpen(false); // Fecha o menu mobile ao trocar idioma
//   };

//   const closeMenu = () => setIsMobileMenuOpen(false);

//   return (
//     <header className="header">
//       <div className="header__left">
//         {/* Logo que segue o toggle através das variáveis CSS */}
//         <a href="#about" className="header__logo" onClick={closeMenu}>
//           Samuel<span>Lazarin</span>
//         </a>
//       </div>

//       <div className="header__right">
//         <button
//           className={`nav__burger ${isMobileMenuOpen ? "nav__burger--open" : ""}`}
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         <nav className="nav" id="mainNav" ref={navContainerRef}>
//           <ul
//             className={`nav__list ${isMobileMenuOpen ? "nav__list--open" : ""}`}
//           >
//             <li>
//               <a href="#about" onClick={closeMenu} className="nav__link">
//                 {t("navbar.about")}
//               </a>
//             </li>
//             <li>
//               <a href="#projects" onClick={closeMenu} className="nav__link">
//                 {t("navbar.projects")}
//               </a>
//             </li>
//             <li>
//               <a href="#skills" onClick={closeMenu} className="nav__link">
//                 {t("navbar.skills")}
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={closeMenu} className="nav__link">
//                 {t("navbar.contact")}
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="nav__lang-container" ref={langMenuRef}>
//           <button
//             className="nav__lang-btn"
//             onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
//           >
//             Traduzir <span>▼</span>
//           </button>
//           {isLangMenuOpen && (
//             <ul className="nav__lang-menu">
//               <li onClick={() => handleLanguageChange("pt")}>
//                 <span>🇧🇷</span> Português
//               </li>
//               <li onClick={() => handleLanguageChange("en")}>
//                 <span>🇺🇸</span> English
//               </li>
//               <li onClick={() => handleLanguageChange("es")}>
//                 <span>🇪🇸</span> Español
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";

export default function Navbar({ activeSection }) {
  const { t, i18n } = useTranslation();
  const navContainerRef = useRef(null);
  const indicatorRef = useRef(null);

  // Estados para controle de interface
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const langMenuRef = useRef(null);

  // Lógica da barrinha indicadora (Apenas Desktop > 900px)
  useEffect(() => {
    const activeLink = document.querySelector(".nav__link--active");
    if (
      activeLink &&
      navContainerRef.current &&
      indicatorRef.current &&
      window.innerWidth > 900
    ) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = navContainerRef.current.getBoundingClientRect();
      indicatorRef.current.style.width = `${linkRect.width}px`;
      indicatorRef.current.style.left = `${linkRect.left - navRect.left}px`;
      indicatorRef.current.style.opacity = "1";
    } else if (indicatorRef.current) {
      indicatorRef.current.style.opacity = "0";
    }
  }, [activeSection, i18n.language]);

  // Fecha o dropdown de idiomas ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="header__left">
        <a href="#about" className="header__logo" onClick={closeMenu}>
          Samuel<span>Lazarin</span>
        </a>
      </div>

      <div className="header__right">
        {/* Botão Burger Animado */}
        <button
          className={`nav__burger ${isMobileMenuOpen ? "nav__burger--open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="nav" id="mainNav" ref={navContainerRef}>
          <ul
            className={`nav__list ${isMobileMenuOpen ? "nav__list--open" : ""}`}
          >
            <li>
              <a
                href="#about"
                className={`nav__link ${activeSection === "about" ? "nav__link--active" : ""}`}
                onClick={closeMenu}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav__link ${activeSection === "projects" ? "nav__link--active" : ""}`}
                onClick={closeMenu}
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav__link ${activeSection === "skills" ? "nav__link--active" : ""}`}
                onClick={closeMenu}
              >
                {t("navbar.skills")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav__link ${activeSection === "contact" ? "nav__link--active" : ""}`}
                onClick={closeMenu}
              >
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
          <span className="nav__indicator" ref={indicatorRef}></span>
        </nav>

        {/* Dropdown de Idiomas Estilo Pílula */}
        <div className="nav__lang-container" ref={langMenuRef}>
          <button
            className="nav__lang-btn"
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            Traduzir{" "}
            <span className="nav__lang-arrow">
              {isLangMenuOpen ? "▲" : "▼"}
            </span>
          </button>

          {isLangMenuOpen && (
            <ul className="nav__lang-menu">
              <li
                onClick={() => handleLanguageChange("pt")}
                className="nav__lang-item"
              >
                <span className="nav__lang-flag">
                  <img src="Image/brasil.svg" alt="Brasil" />
                </span>
                <span className="nav__lang-text">Português</span>
              </li>
              <li
                onClick={() => handleLanguageChange("en")}
                className="nav__lang-item"
              >
                <span className="nav__lang-flag">
                  <img src="Image/english.svg" alt="English" />
                </span>
                <span className="nav__lang-text">English</span>
              </li>
              <li
                onClick={() => handleLanguageChange("es")}
                className="nav__lang-item"
              >
                <span className="nav__lang-flag">
                  <img src="Image/espanhol.svg" alt="" />
                </span>
                <span className="nav__lang-text">Español</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
