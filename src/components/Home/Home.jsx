import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__name">Samuel Lazarin</h1>
        <h2 className="hero__subtitle">Desenvolvedor Fullstack</h2>

        <h3 className="hero__tech-subtitle">
          <span>
            Founder da Vallis Tech & Dev Foco Frontend (React, TS, Sass)
          </span>
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
        <p>Role a página</p>
      </a>
    </section>
  );
}
