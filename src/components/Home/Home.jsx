import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.scss";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      {/* O vídeo entra aqui, antes do overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero__video"
      >
        <source src="/vídeoHero-Section.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__name">Samuel Lazarin</h1>
        <h2 className="hero__subtitle">{t("hero.role")}</h2>

        <h3 className="hero__tech-subtitle">
          <span>{t("hero.subtitle")}</span>
        </h3>

        <div className="hero__socials">
          <a
            href="https://www.linkedin.com/in/samuel-lazarin/"
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Lazarin123"
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/sam_lazarin"
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            Instagram
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>↓</span>
        <p>{t("hero.scroll_down")}</p>
      </a>
    </section>
  );
}
