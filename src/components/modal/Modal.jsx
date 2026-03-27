import React from "react";
import "./Modal.scss";

export default function Modal({ project, onClose }) {
  // Se não houver projeto selecionado, não renderiza nada
  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? "active" : ""}`}
      onClick={(e) => {
        // Fecha o modal apenas se clicar no fundo escuro
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className="modal__img-container">
          {project.imageModal ? (
            <img
              src={project.imageModal}
              alt={`Demonstração do ${project.title}`}
              className="modal__img"
            />
          ) : (
            <div className="img-placeholder modal__img">
              Sem prévia disponível
            </div>
          )}
        </div>

        <div className="modal__text-content">
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__desc">
            {project.desc}
            <br />
            <br />
            <strong>Foco Técnico:</strong> <span>{project.tech}</span>
          </p>
        </div>

        <div className="modal__actions">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Live Demo
          </a>
          <a
            href={project.git}
            target="_blank"
            rel="noreferrer"
            className="btn btn--secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
