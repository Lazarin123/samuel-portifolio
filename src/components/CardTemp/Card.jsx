import React from "react";
import "./Card.scss";

export default function Card({ project, onClick }) {
  return (
    <article className="card" onClick={() => onClick(project)}>
      <div className="card__img-container">
        {project.image ? (
          <img src={project.image} alt={project.title} className="card__img" />
        ) : (
          <div className="card__img-placeholder">
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className="card__content">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__tech">{project.tech}</p>
      </div>
    </article>
  );
}
