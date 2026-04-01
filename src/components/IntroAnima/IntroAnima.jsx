import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnima = ({ onFinished }) => {
  // Configuração
  const totalLetters = 70; // Quantas letras aleatórias no fundo
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  const fixedText = "Hello Dev!"; // Texto final grande
  
  // Estado para controlar a transição entre as fases
  const [stage, setStage] = useState('random'); // 'random' -> 'fixed' -> 'finished'

  // Variantes para o container das letras aleatórias
  const randomContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Efeito cascata para as letras aparecerem
        delayChildren: 0.5, // Respiro inicial
      },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  // Variantes para cada letra aleatória individual
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: [0, 0.6, 0.3, 0], // Pisca e some suavemente
      scale: [0.5, 1.3, 0.9, 0.8],
      x: () => [
        Math.random() * window.innerWidth - window.innerWidth / 2, // Inicia em posição X aleatória
        Math.random() * window.innerWidth - window.innerWidth / 2 // Termina em outra posição X aleatória
      ],
      y: () => [
        Math.random() * window.innerHeight - window.innerHeight / 2, // Mesma lógica para Y
        Math.random() * window.innerHeight - window.innerHeight / 2
      ],
      transition: {
        duration: Math.random() * 2 + 1, // Duração aleatória mais longa
        delay: Math.random() * 0.8, // Atraso aleatório para entrada
        repeat: 0,
        ease: "easeInOut"
      },
    },
  };

  // Variantes para o texto fixo final (o grande final)
  const fixedTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 2.8, // Começa quando a maioria das aleatórias já sumiram
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    // 1. Inicia mostrando as letras aleatórias.
    // 2. Após 2.5s, instruímos o componente a preparar a revelação do texto fixo.
    const showFixedTimer = setTimeout(() => {
      setStage('fixed');
    }, 2500);

    // 3. Após 5s (tempo total da experiência), avisamos o App.js que acabou.
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 5000);

    return () => {
      clearTimeout(showFixedTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-[999] bg-gray-950 overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* --- ESTÁGIO 1: NUVEM DE CÓDIGO ALEATÓRIO --- */}
        {stage === 'random' && (
          <motion.div
            key="random-letters"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={randomContainerVariants}
            className="absolute inset-0 flex items-center justify-center"
          >
            {Array.from({ length: totalLetters }).map((_, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="absolute text-violet-600/30 dark:text-violet-500/20 font-mono text-2xl md:text-5xl select-none"
              >
                {randomChars[Math.floor(Math.random() * randomChars.length)]}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* --- ESTÁGIO 2: REVELAÇÃO DO TEXTO FIXO GRANDE --- */}
        {stage === 'fixed' && (
          <motion.div
            key="fixed-text"
            initial="hidden"
            animate="visible"
            variants={fixedTextVariants}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            {/* Texto Fixo Final: MUITO GRANDE */}
            <motion.h1 
              className="text-white font-extrabold text-7xl md:text-9xl lg:text-[160px] tracking-tighter text-center leading-none"
              style={{
                textShadow: "0 0 20px rgba(139, 92, 246, 0.6)" // Brilho suave
              }}
            >
              Hello Dev!
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroAnima;
