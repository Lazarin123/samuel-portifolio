import React from "react";
import "./Footer.scss";
import TheToggle from "../TheToggle/ThemeToggle";

export default function Footer({ theme, toggleTheme }) {
  // Lista de badges de tecnologias e redes sociais
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
            LAZARIN<span>123</span>
          </a>
          <p className="footer__quote">
            "Transformando café e ideias complexas em soluções web escaláveis."
          </p>
        </div>
        <div className="footer__center">
          <h4>Navegação</h4>
          <ul className="footer__nav-list">
            <li>
              <a href="#about" className="footer__nav-link">
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__nav-link">
                Projetos
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__nav-link">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__nav-link">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <h4>Tecnologias</h4>
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
        &copy; 2026 Samuel Lazarin. Todos os direitos reservados.
      </div>
      <TheToggle theme={theme} toggleTheme={toggleTheme} />
    </footer>
  );
}
