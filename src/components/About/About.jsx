import React, { useState } from "react";
import "./About.scss";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about__middle">
        <div className="flip-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
          <div className="card-flip-container">
            <div className={`card-flip-inner ${isFlipped ? "is-flipped" : ""}`}>
              <div className="front">
                <div className="img-placeholder">
                  <img src="Image/perfil.png" alt="Foto Samuel Lazarin" />
                </div>
              </div>
              <div className="back">
                <p className="magic-phrase">
                  "Bons programadores escrevem códigos que os humanos entendam"
                </p>
                <span className="magic-author">- Martin Fowler</span>
              </div>
            </div>
          </div>
          <p className="magic-prompt">
            {isFlipped
              ? "Clique para voltar ↑"
              : "Clique na foto para ver a mágica ↑"}
          </p>
        </div>

        <div className="about__bio">
          <h2 className="about__bio-title">Quem é o Samuel?</h2>
          <p className="about__text">
            Sou um desenvolvedor movido pela criação de interfaces limpas e
            experiências digitais intuitivas. Graduando em Engenharia de
            Software (2029), combino a paixão por arquitetura de software
            moderna com uma forte base em Qualidade de Software (QA) e Suporte
            Técnico.
          </p>
          <p className="about__text">
            Além de desenvolvedor, sou fundador da <strong>Vallis Tech</strong>,
            uma startup dedicada a criar soluções web escaláveis, onde aplico
            minha visão de negócios e liderança técnica focada no frontend.
          </p>
        </div>
      </div>

      <div className="about__bottom">
        <div className="about__card">
          <h2 className="about__bio-title">Trajetória Profissional</h2>
          <p className="about__text">
            Minha jornada teve início na Qualidade de Software (QA),
            desenvolvendo um olhar crítico para bugs e automação de testes
            (BDD/Robot). Hoje, aplico essa mentalidade "test-first" no
            desenvolvimento Fullstack.
          </p>
        </div>
        <div className="about__card">
          <h2 className="about__bio-title">Visão de Futuro</h2>
          <p className="about__text">
            Como Engenheiro de Software, meu objetivo é arquitetar aplicações
            escaláveis e mentorar a próxima geração, sempre buscando o
            equilíbrio entre código performático e UI/UX de classe mundial.
          </p>
        </div>
      </div>
    </section>
  );
}
