import React, { useState } from "react";
import "./_projects.scss";
import Modal from "../Modal/modal";
import Card from "../Card/card";

const projects = [
  {
    id: 1,
    title: "Gerenciador de Tarefas - JAVA",
    description:
      "Um projeto simples com muita lógica, onde o usuário pode criar, editar e excluir tarefas.",
    badges: "Java",
    details:
      "Um projeto simples com muita lógica, onde o usuário pode criar, editar e excluir tarefas. Desenvolvido em Java praticando boas práticas e estilo, um aprendizado constante e que sempre buscando melhorar e assim evoluir.",
    githubLink: "https://github.com/Lazarin123/Gerenciado-de-Tarefas",
  },
  {
    id: 2,
    title: "Carnivoros e Herbívoros - JavaScript",
    description:
      "Um projeto de lógica com JavaScript, onde simulo um jogo entre carnivoros e herbívoros.",
    badges: "JavaScript",
    details:
      "Um projeto voltado para o BackEnd onde temos um jogo de Carnivoros e Herbivoros, onde mostra vidas, ataques e defesas. Desenvolvido em JavaScript praticando boas práticas e estilo, um aprendizado constante e que sempre buscando melhorar e assim evoluir.",
    githubLink:
      "https://github.com/Lazarin123/js_herbivores_and_carnivores/tree/develop",
  },
  {
    id: 3,
    title: "Simulador de Caixa Eletrônico - Linguagem C",
    description:
      "Aplicação em Linguagem C para simular um caixa eletrônico, desenvolvida com C.",
    badges: "C",
    details:
      "Um sistema de Caixa eletronico simples porém que me trouxe um grande aprendizado e que me ajudou a entender mais sobre a lógica de programação onde evolui e consegui desenvolver esse sistema em C, uma linguagem que me ajudou muito na hora de desenvolvimento e que sempre busco melhorar e assim evoluir com ela.",
    githubLink: "https://github.com/Lazarin123/Simulador-Caixa-Eletronico",
  },
  {
    id: 4,
    title: "Jogo 2048 - JavaScript",
    description:
      "Aplicação JavaScript do jogo 2048, desenvolvida com HTML, CSS e JavaScript.",
    badges: "JavaScript" + " | " + "SCSS" + " | " + "HTML",
    details:
      "Um jogo interativo 2048, desenvolvido com HTML, CSS e JavaScript, na qual o objetivo é ganhar o jogo com mais pontos, o jogo constiste em você jogar através das setas do teclado, e ganha quem fizer mais pontos.",
    image: "Image/2048/2048-1.png",
    githubLink: "https://github.com/Lazarin123/Projeto-Jogo-2048",
    liveDemo: "https://lazarin123.github.io/js_2048_game/",
  },
  {
    id: 5,
    title: "Landing Page - MyBike",
    description:
      "Landing page para uma empresa de bicicletas, desenvolvida com HTML, CSS e JavaScript.",
    badges: "JavaScript" + " | " + "CSS/SCSS" + " | " + "HTML",
    details:
      "Landing page da empresa MyBike, desenvolvida com HTML, CSS e JavaScript, um projeto na qual me aperfeiçoei em Positions, Grid e Flexbox do CSS/Sass, e assim evolui e consegui desenvolver esse projeto em JavaScript,conseguindo ter mais noções de programação e lógica.",
    image: "Image/MyBike/MyBike.png",
    githubLink: "https://github.com/Lazarin123/Landing-Page",
    liveDemo: "https://lazarin123.github.io/layout_landing-page/#",
  },
  {
    id: 6,
    title: "Mudança de cor - JavaScript",
    description:
      "Aplicação JavaScript simples para mudança de cor da página, desenvolvida em JavaScript e CSS.",
    badges: "JavaScript" + " | " + "CSS",
    details:
      "Um projeto bem simples mas que aprendi bastante de manipulação de eventos e botões, trazendo boas prátricas e estilo, um aprendizado constante e que sempre buscando melhorar e assim evoluir, um projeto voltado para você ver o código de uma cor cado queira utilizar, um projeto simples mas com grande aprendizado.",
    image: "Image/color/Color.png",
    githubLink:
      "https://github.com/Lazarin123/Projeto-mudancas-de-cores?tab=readme-ov-file",
    liveDemo: "https://lazarin123.github.io/Projeto-mudancas-de-cores/",
  },
  {
    id: 7,
    title: "PokeDex - JavaScript",
    description:
      "Aplicação JavaScript Master PokeDex, desenvolvida em JavaScript.",
    badges: "JavaScript" + " | " + "API" + " | " + "HTML" + " | " + "CSS",
    details:
      "a paixão pelo anime e por aprender com o que gosto, a pokedex desenvolvida em JavaScript, na qual tem os 151 pokémons da primeira geração na qual você consegue capturalos e velos na parte de captura, soltar, e ver todos os que faltam e todos no geral.",
    image: "Image/pokedex/PokeDex2.png",
    githubLink: "https://github.com/Lazarin123/PokeDex-JS",
    liveDemo: "https://lazarin123.github.io/PokeDex-JS/",
  },
  {
    id: 8,
    title: "Conversor de Moedas - JavaScript",
    description:
      "Aplicação JavaScript de Converter Moedas, desenvolvida em JavaScript.",
    badges: "JavaScript" + " | " + "API",
    details:
      "Um conversor de moedas na qual usa a integração de API, um projeto na qual demandou conhecimento em apis e lógica, um proojeto na qual você pode converter APIS em tempo real que se atualiza de 30 em 30 segundos, temos algumas moedas mais usadas para realizar as conversões.",
    image: "Image/conversor/conversor2.png",
    githubLink: "https://github.com/Lazarin123/Conversor-de-Moedas-JS",
    liveDemo: "https://lazarin123.github.io/Conversor-de-Moedas-JS/",
  },
  {
    id: 9,
    title: "FlowState - JavaScript",
    badges: "JavaScript" + " | " + "Pomodoro" + " | " + "CSS",
    description: "Aplicação JavaScript Baseada na Técnica Pomodo.",
    details:
      "Uma aplicação desenvolvida e inspirada na técnica de PomoDoro, um projeto na qual demandou muita lógica de programação e foi um projeto desenvolvido para ajudar pessoas a focarem mais e assim conseguirem apprender/desenvolver mais e mais.",
    image: "Image/flowState/FlowState2.png",
    githubLink: "https://github.com/Lazarin123/Projeto-FlowState",
    liveDemo: "https://lazarin123.github.io/Projeto-FlowState/",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <Card
            title={selectedProject.title}
            badges={selectedProject.badges}
            details={selectedProject.details}
            image={selectedProject.image}
            githubLink={selectedProject.githubLink}
            liveDemo={selectedProject.liveDemo}
            isExpanded={true}
          />
        </Modal>
      )}

      <h2>Meus Projetos</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 100)}...</p>
            <span className="read-more">Clique para ver detalhes</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
