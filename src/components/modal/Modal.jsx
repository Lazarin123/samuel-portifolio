import React from "react";
import { useTranslation } from "react-i18next";
import "./Modal.scss";

export default function Modal({ project, onClose }) {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? "active" : ""}`}
      onClick={(e) => {
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
              {t("modal.no_preview")}
            </div>
          )}
        </div>

        <div className="modal__text-content">
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__desc">
            {project.desc} {/* A descrição em si vem do seu JSON de projetos */}
            <br />
            <br />
            <strong>{t("modal.tech_focus")}</strong> <span>{project.tech}</span>
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
