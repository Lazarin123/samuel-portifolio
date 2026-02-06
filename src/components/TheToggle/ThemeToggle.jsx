import React, { useState, useEffect } from "react";
import "./_themetoggle.scss";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Aplica o atributo no elemento principal do HTML
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, [isDark]);

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input
          type="checkbox"
          onChange={() => setIsDark(!isDark)}
          checked={isDark}
        />
        <div className="slider round"></div>
      </label>
      <span>{isDark ? "🌙 Dark" : "☀️ Light"}</span>
    </div>
  );
};

export default ThemeToggle;
