import React from "react";
import Card from "../CardTemp/Card.jsx";
import "./Projects.scss";

export default function Projects({ data, onProjectClick }) {
  return (
    <section id="projects">
      <h2 className="section-title">
        Meus <span>Projetos</span>
      </h2>
      <div className="grid-container">
        {data.map((project) => (
          <Card key={project.id} project={project} onClick={onProjectClick} />
        ))}
      </div>
    </section>
  );
}
