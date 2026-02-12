import React from "react";
import "./_projects.scss";

const projects = [
  {
    id: 1,
    title: "Gerenciador de Tarefas - JAVA",
    description:
      "Um projeto simples porém com um grande aprendizado e com muita lógica, onde o usuário pode criar, editar e excluir tarefas, além de marcar como concluídas.",
    githubLink: "https://github.com/Lazarin123/Gerenciado-de-Tarefas",
  },
  {
    id: 2,
    title: "Carnivoros e Herbívoros - JavaScript",
    description:
      "Um projeto de lógica com JavaScript, onde simulo um jogo entre carnivoros e herbívoros. O objetivo é criar uma simulação onde os carnivoros tentam caçar os herbívoros, enquanto os herbívoros tentam sobreviver e se reproduzir.",
    githubLink:
      "https://github.com/Lazarin123/js_herbivores_and_carnivores/tree/develop",
  },
  {
    id: 3,
    title: "Simulador de Caixa Eletrônico - Linguagem C",
    description:
      "Aplicação em Linguagem C para simular um caixa eletrônico, desenvolvida com C. Projeto feito por conta própria para praticar lógica de programação.",
    githubLink: "https://github.com/Lazarin123/Simulador-Caixa-Eletronico",
  },
  {
    id: 4,
    title: "Jogo 2048 - JavaScript",
    description:
      "Aplicação JavaScript do jogo 2048, desenvolvida com HTML, CSS e JavaScript. Projeto do curso de Front-End da MateAcademy.",
    githubLink: "https://github.com/Lazarin123/Projeto-Jogo-2048",
    liveDemo: "https://lazarin123.github.io/js_2048_game/",
  },
  {
    id: 5,
    title: "Landing Page - MyBike",
    description:
      "Landing page para uma empresa de bicicletas, desenvolvida com HTML, CSS e JavaScript. Projeto do curoso de Front-End da MateAcademy.",
    githubLink: "https://github.com/Lazarin123/Landing-Page",
    liveDemo: "https://lazarin123.github.io/layout_landing-page/#",
  },
  {
    id: 6,
    title: "Mudança de cor - JavaScript",
    description:
      "Aplicação JavaScript simples para mudança de cor da página, desenvolvida em JavaScript e CSS. Projeto desenvolvido por conta própria para praticar lógica de programação.",
    githubLink:
      "https://github.com/Lazarin123/Projeto-mudancas-de-cores?tab=readme-ov-file",
    liveDemo: "https://lazarin123.github.io/Projeto-mudancas-de-cores/",
  },
  {
    id: 7,
    title: "PokeDex - JavaScript",
    description:
      "Aplicação JavaScript Master PokeDex, desenvolvida em JavaScript. Projeto desenvolvido por conta própria para praticar lógica de programação, integração de API e a paixão pelo Anime.",
    githubLink: "https://github.com/Lazarin123/PokeDex-JS",
    liveDemo: "https://lazarin123.github.io/PokeDex-JS/",
  },
  {
    id: 8,
    title: "Conversor de Moedas - JavaScript",
    description:
      "Aplicação JavaScript de Converter Moedas, desenvolvida em JavaScript. Projeto desenvolvido por conta própria para praticar lógica de programação, integração de API com o pensamento de auxiliar e facilitar na hora de converter as moedas que deseja.",
    githubLink: "https://github.com/Lazarin123/Conversor-de-Moedas-JS",
    liveDemo: "https://lazarin123.github.io/Conversor-de-Moedas-JS/",
  },
  {
    id: 9,
    title: "FlowState - JavaScript",
    description:
      "Aplicação JavaScript Baseada na Técnica Pomodo, desgin minimalista e fácil de entender e mexer, timers diferentes para Foco e Pausa, com a diferença de 5 em 5 minutos para melhor qualidade. Desenvolvido por Samuel Lazarin no Intuito de ajudar a todos.",
    githubLink: "https://github.com/Lazarin123/Projeto-FlowState",
    liveDemo: "https://lazarin123.github.io/Projeto-FlowState/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__actions">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__button"
              >
                Ver no GitHub
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__button project-card__button--demo"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
