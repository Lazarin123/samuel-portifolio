import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2 className="section-title">
        {t("contact.title_1")} <span>{t("contact.title_2")}</span>
      </h2>
      <div className="contact-grid">
        {/* Seus links de contato continuam exatamente iguais */}
        <a
          href="https://linkedin.com/in/samuel-lazarin/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card__img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="LinkedIn"
              className="contact-card__img"
            />
          </div>
          <h3 className="contact-card__title">LinkedIn</h3>
        </a>

        <a
          href="https://github.com/Lazarin123"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card__img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="contact-card__img"
            />
          </div>
          <h3 className="contact-card__title">GitHub</h3>
        </a>

        <a
          href="https://instagram.com/sam_lazarin"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card__img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              alt="Instagram"
              className="contact-card__img"
            />
          </div>
          <h3 className="contact-card__title">Instagram</h3>
        </a>

        <a
          href="https://wa.me/5511946701625?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços."
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card__img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="contact-card__img"
            />
          </div>
          <h3 className="contact-card__title">WhatsApp</h3>
        </a>
      </div>
    </section>
  );
}
