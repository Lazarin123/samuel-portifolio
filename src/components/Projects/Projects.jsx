import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../CardTemp/Card.jsx";
import "./Projects.scss";

export default function Projects({ data, onProjectClick }) {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <h2 className="section-title">
        {t("projects.title_1")} <span>{t("projects.title_2")}</span>
      </h2>
      <div className="grid-container">
        {data.map((project) => (
          <Card key={project.id} project={project} onClick={onProjectClick} />
        ))}
      </div>
    </section>
  );
}
