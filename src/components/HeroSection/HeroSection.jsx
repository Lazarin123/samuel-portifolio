import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react'; // Ícones opcionais

const HeroSection = () => {
  // 1. Variantes de Animação para o Container Principal
  // Isso orquestra o tempo dos filhos (staggerChildren)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Atraso antes de começar a animação
        delayChildren: 0.3,
        // Tempo entre a animação de cada filho (efeito cascata)
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Variantes de Animação para Elementos Individuais (Texto e Botões)
  // Eles entram de baixo para cima com fade-in
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring', // Dá uma sensação mais natural, 'mola'
        damping: 12,    // Controla a oscilação da mola
        stiffness: 100, // Controla a rigidez da mola
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      {/* Container Principal Animado */}
      <motion.div
        className="max-w-4xl text-center"
        initial="hidden"     // Estado inicial
        animate="visible"     // Estado final (ao montar o componente)
        variants={containerVariants}
      >
        {/* Item 1: Saudação/Badge */}
        <motion.span
          variants={itemVariants}
          className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
        >
          Olá, eu sou Samuel 👋
        </motion.span>

        {/* Item 2: Título Principal */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6"
        >
          Desenvolvedor <span className="text-blue-600">Full Stack</span> & Enthusiasta de UI/UX.
        </motion.h1>

        {/* Item 3: Subtítulo/Descrição */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Especializado em construir aplicações web modernas, escaláveis e focadas na experiência do usuário. Conheça meu trabalho abaixo.
        </motion.p>

        {/* Item 4: Botões de Ação (CTA) e Redes Sociais */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Botão Principal */}
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors rounded-xl"
          >
            Ver Meus Projetos
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Links de Redes Sociais (Animados individualmente no hover) */}
          <div className="flex gap-3">
            <motion.a
              href="https://github.com/Lazarin123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }} // Animação sutil no hover
              className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/seu-linkedin" // ADICIONE SEU LINK AQUI
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
