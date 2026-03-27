import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({ project, onClick }) {
  // Verifique se a propriedade image existe, senão use um placeholder ou nada
  const projectImageUrl = project.image;

  return (
    <article className="card" onClick={() => onClick(project)}>
      {projectImageUrl ? (
        <img src={projectImageUrl} alt={project.title} className="card__img" />
      ) : (
        <div className="img-placeholder card__img">{project.title}</div>
      )}
      <h3 className="card__title">{project.title}</h3>
      <p className="card__tech">{project.tech}</p>
    </article>
  );
}
