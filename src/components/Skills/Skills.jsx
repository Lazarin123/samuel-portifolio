import React from "react";
import "./Skills.scss";

export default function Skills({ hardSkills, softSkills }) {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">
        Minhas <span>Habilidades</span>
      </h2>

      <h3 className="skills__subtitle skills__subtitle--purple">Hard Skills</h3>
      <div className="skills-grid skills-grid--mb">
        {hardSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
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

      <h3 className="skills__subtitle skills__subtitle--gold">Soft Skills</h3>
      <div className="skills-grid">
        {softSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
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
