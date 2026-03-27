import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import TheToggle from "../TheToggle/ThemeToggle";

export default function Footer({ theme, toggleTheme }) {
  const { t } = useTranslation();

  const badges = [
    { name: "JavaScript", color: "#F7DF1E", textColor: "#323330" },
    { name: "Node.js", color: "#339933", textColor: "white" },
    { name: "React", color: "#61DAFB", textColor: "#282C34" },
    { name: "TypeScript", color: "#3178C6", textColor: "white" },
    { name: "C# / .NET", color: "#178600", textColor: "white" },
    { name: "SQL / DB", color: "#CC2927", textColor: "white" },
  ];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <a href="#hero" className="footer__logo">
            LAZARIN<span>Dev</span>
          </a>
          <p className="footer__quote">
            <i>{t("footer.quote")}</i>
          </p>
        </div>
        <div className="footer__center">
          <h4>{t("footer.nav_title")}</h4>
          <ul className="footer__nav-list">
            <li>
              <a href="#about" className="footer__nav-link">
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__nav-link">
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__nav-link">
                {t("navbar.skills")}
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__nav-link">
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <h4>{t("footer.tech_title")}</h4>
          <div className="footer__badges">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="badge"
                style={{ backgroundColor: badge.color, color: badge.textColor }}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <hr className="footer__divider" />
      <div
        style={{
          textAlign: "center",
          color: "var(--color-text-secondary)",
          marginBottom: "1rem",
          fontSize: "0.9rem",
        }}
      >
        &copy; 2026 Samuel Lazarin. {t("footer.rights")}
      </div>
      <TheToggle theme={theme} toggleTheme={toggleTheme} />
    </footer>
  );
}
