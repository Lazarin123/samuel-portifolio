//--- Imports ---
import React, { useState, useEffect } from "react";

// Estilos Globais
import "./styles/App.scss";

//importação do Lenis
import Lenis from "lenis";

// Vídeos de fundo
import bgVideoDark from "./assets/loopFundoDark.mp4";
import bgVideoLight from "./assets/loopFundoClaro.mp4";

// Componentes
import Navbar from "./components/Navbar/Navbar";
import IntroAnima from "./components/IntroAnima/IntroAnima";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Modal from "./components/modal/Modal";
import ThemeToggle from "./components/TheToggle/ThemeToggle";

// --- MOCK DE DADOS - Projects ---
const projectsData = [
  //Projeto 1
  {
    id: 1,
    title: "Valoriza App",
    tech: "React • JavaScript • Sass • NodeJS • NSQL",
    desc: "Plataforma completa de planejamento financeiro. Desenvolvida para auxiliar e ajudar as pessoas a economizarem e melhorarem suas vidas financeiras através desse sistema. Link demo e Git não funcionam pois não está no ar!",
    demo: "#",
    git: "#",
    image: "Image/Valoriza/Valoriza-1.png",
    imageModal: "Image/Valoriza/Valoriza-2.png",
  },
  //Projeto 2
  {
    id: 2,
    title: "FlowState",
    tech: "JavaScript • HTML • BEM",
    desc: "Aplicação Pomodoro de produtividade. Desenvolvida para ajudar a todos a melhorarem seu jeito de estudar e evoluirem cada vez mais, projeto desenvolvido para praticar a lógica de programação na qual já tem ajudado mais de 30 pessoas!",
    demo: "https://lazarin123.github.io/Projeto-FlowState/",
    git: "https://github.com/Lazarin123/Projeto-FlowState",
    image: "Image/flowState/FlowState2.png",
    imageModal: "Image/flowState/FlowState1.png",
  },
  //Projeto 3
  {
    id: 3,
    title: "Caixa Eletrônico - C",
    tech: "C",
    desc: "Projeto desenvolvido na Linguagem C de simulador de caixa eletrônico, na qual foi aplicado a lógica e estruturas para o sistema, um projeto na qual evolui e aprimorei meus conhecimentos em Lógica de Programação e Linguagem C",
    demo: "https://github.com/Lazarin123/Simulador-Caixa-Eletronico",
    git: "https://github.com/Lazarin123/Simulador-Caixa-Eletronico",
    image: "Image/caixa/Simulador-Caixa.png",
    imageModal: "Image/caixa/Simulador-Caixa.png",
  },
  //Projeto 4
  {
    id: 4,
    title: "Carnivoros e Herbivoros",
    tech: "JavaScript • Lógica de Programação",
    desc: "Projeto voltado para o desenvolvimento BackEnd, de um jogo de Carnivoros e Herbivoros na qual foi aplicado a lógica de programação para o desenvolvimento do projeto!",
    demo: "https://github.com/Lazarin123/js_herbivores_and_carnivores",
    git: "https://github.com/Lazarin123/js_herbivores_and_carnivores",
    image: "Image/CH/Carnivoros e Herbivoros.png",
    imageModal: "Image/CH/Carnivoros e Herbivoros.png",
  },
  //Projeto 5
  {
    id: 5,
    title: "My Bike - Landing Page",
    tech: "JavaScript • HMTL • CSS/BEM",
    desc: "Projeto desenvolvido para desenvolver a parte de styles como Grid, FlexBox, Positions, e praticar a lógica de programação no desenvolvimento FrontEnd Vanilla, Projeto de LandingPage para a empresa MyBike na qual evolui muito com esse desenvolvimento!",
    demo: "https://lazarin123.github.io/layout_landing-page/",
    git: "https://github.com/Lazarin123/Landing-Page",
    image: "Image/MyBike/MyBike.png",
    imageModal: "Image/MyBike/MyBike1.png",
  },
  //Projeto 6
  {
    id: 6,
    title: "PokeDex",
    tech: "JavaScript • HMTL • CSS/BEM • API",
    desc: "Projeto desenvolvido para desenvolver a parte de styles como Grid, FlexBox, Positions, Integração de APIS e praticar a lógica de programação no desenvolvimento FrontEnd Vanilla, Projeto de PokeDex na qual evolui muito com esse desenvolvimento!",
    demo: "https://lazarin123.github.io/PokeDex-JS/",
    git: "https://github.com/Lazarin123/PokeDex-JS",
    image: "Image/pokedex/PokeDex2.png",
    imageModal: "Image/pokedex/PokeDex.1.png",
  },
  //Projeto 7
  {
    id: 7,
    title: "Conversor de Moedas",
    tech: "JavaScript • HMTL • CSS/BEM • API",
    desc: "Projeto desenvolvido para desenvolver a parte de styles como Grid, FlexBox, Positions, Integração de APIS e praticar a lógica de programação, Projeto de Conversor de Moedas na qual conta com uma taxa de atualização de 30s para melhor experiência!",
    demo: "https://lazarin123.github.io/Conversor-de-Moedas-JS/",
    git: "https://github.com/Lazarin123/Conversor-de-Moedas-JS",
    image: "Image/conversor/conversor2.png",
    imageModal: "Image/conversor/conversor1.png",
  },
  //Projeto 8
  {
    id: 8,
    title: "Jogo 2048",
    tech: "JavaScript • HMTL • CSS/BEM",
    desc: "Projeto desenvolvido para desenvolver a parte de styles como Grid, FlexBox, Positions, Lógica de programação, Projeto do jogo 2048 na qual conta com um jogo de quem faz mais pontos e muito bom para a evolução da lógica! Funciona apenas em Desktop (Computadores)",
    demo: "https://lazarin123.github.io/js_2048_game/",
    git: "https://github.com/Lazarin123/Projeto-Jogo-2048",
    image: "Image/2048/2048-1.png",
    imageModal: "Image/2048/2048-1.png",
  },
  //Projeto 9
  {
    id: 9,
    title: "Buscador de CEP",
    tech: "JavaScript • HMTL • CSS/BEM • API",
    desc: "Projeto desenvolvido para desenvolver a parte de styles como Grid, FlexBox, Positions, Lógica de programação e APIs, Projeto do Buscador de CEP na qual conta com um projeto de buscador de cep aonde pratiquei minha lógica de programação e integração de APIs!",
    demo: "https://lazarin123.github.io/Project-Api/",
    git: "https://github.com/Lazarin123/Project-Api",
    image: "Image/cep/buscador.png",
    imageModal: "Image/cep/buscador.png",
  },
];

//--- HardSkills ---
const hardSkillsData = [
  { name: "React + TypeScript", percent: 78 },
  { name: "JavaScript & DOM", percent: 89 },
  { name: "C# & .NET", percent: 67 },
  { name: "Sass & BEM", percent: 95 },
  { name: "Node.js", percent: 67 },
  { name: "SQL", percent: 57 },
];

//--- SoftSkills ---
const softSkillsData = [
  { name: "skills.comunicacao", percent: 89 },
  { name: "skills.trabalho_em_equipe", percent: 89 },
  { name: "skills.resolucao_de_problemas", percent: 87 },
  { name: "skills.criatividade", percent: 76 },
  { name: "skills.visao_de_produto", percent: 75 },
  { name: "skills.atencao_ao_detalhes", percent: 70 },
];

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  //--- Configuração Scroll Suave (Lenis) ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Duração do "deslizamento" (quanto maior, mais lento)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleração suave
      smoothWheel: true,
    });

    // Função para manter a animação rodando sincronizada com o monitor
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpeza ao desmontar o componente
    return () => {
      lenis.destroy();
    };
  }, []);
  // ==========================================

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. A ANIMAÇÃO ISOLADA: Fica no topo dando o espaço do scroll */}
      <IntroAnima />

      {/* 2. SEU SITE ORIGINAL: Exatamente como era, sem divs por volta quebrando o CSS */}
      <div className="global-bg">
        <video
          key={theme}
          autoPlay
          loop
          muted
          playsInline
          className="global-bg__video"
        >
          <source
            src={theme === "light" ? bgVideoLight : bgVideoDark}
            type="video/mp4"
          />
        </video>
        <div className="global-bg__overlay"></div>
      </div>

      <Navbar activeSection={activeSection} />

      <main className="main-content-wrapper">
        <Home />
        <About />
        <Projects data={projectsData} onProjectClick={setSelectedProject} />
        <Skills hardSkills={hardSkillsData} softSkills={softSkillsData} />
        <Contact />
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
