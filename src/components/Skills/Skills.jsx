import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.scss";

export default function Skills({ hardSkills, softSkills }) {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">
        {t("skills.title_1")} <span>{t("skills.title_2")}</span>
      </h2>

      <h3 className="skills__subtitle skills__subtitle--purple">
        {t("skills.hard_skills")}
      </h3>
      <div className="skills-grid skills-grid--mb">
        {hardSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              {/* O t() vai renderizar nomes de tecnologias normalmente */}
              <span className="skill-name">{t(skill.name)}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="skills__subtitle skills__subtitle--gold">
        {t("skills.soft_skills")}
      </h3>
      <div className="skills-grid">
        {softSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              {/* Aqui o t() vai buscar a tradução do JSON baseada nas chaves */}
              <span className="skill-name">{t(skill.name)}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
