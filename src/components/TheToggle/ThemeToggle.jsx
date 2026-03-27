import React from "react";
import "./TheToggle.scss"; // Certifique-se de que o nome do arquivo SCSS está correto aqui

export default function TheToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Alternar Tema"
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
