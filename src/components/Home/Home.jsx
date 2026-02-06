import React from "react";
import "./_home.scss";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>
          Olá, eu sou <span className="highlight">Samuel Lazarin</span>
        </h1>
        <p>
          Desenvolvedor Web Fullstack | Apaixonado por criar experiências
          digitais.
        </p>
        <a href="#projects" className="home__button">
          Ver Projetos
        </a>
      </div>
      <div className="home__image">
        <img
          className="image"
          src="../../image/perfil.png"
          alt="Samuel Lazarin"
        />
      </div>
    </section>
  );
}

export default Home;
