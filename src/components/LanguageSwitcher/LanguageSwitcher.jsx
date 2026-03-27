import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select
        onChange={handleLanguageChange}
        defaultValue={i18n.resolvedLanguage || "pt"}
        style={{
          background: "transparent",
          color: "inherit",
          border: "1px solid currentColor",
          padding: "4px 8px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          outline: "none",
        }}
      >
        <option value="pt" style={{ color: "#000" }}>
          PT
        </option>
        <option value="en" style={{ color: "#000" }}>
          EN
        </option>
        <option value="es" style={{ color: "#000" }}>
          ES
        </option>
      </select>
    </div>
  );
}
