import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnima = ({ onFinished }) => {
  // Configuração
  const totalLetters = 65; // Quantas letras aleatórias aparecem
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  const fixedText = "Hello Dev!"; // Texto final
  
  // Estado para controlar a transição entre as fases
  const [phase, setPhase] = useState('random'); // 'random' ou 'fixed'

  // Variantes para as letras aleatórias
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: [0, 0.7, 0.4, 0], // Pisca e some
      scale: [0.5, 1.2, 0.9, 0.8],
      x: [
        Math.random() * window.innerWidth - window.innerWidth / 2, // Inicia em posição X aleatória
        Math.random() * window.innerWidth - window.innerWidth / 2 // Termina em outra posição X aleatória
      ],
      y: [
        Math.random() * window.innerHeight - window.innerHeight / 2, // Mesma lógica para Y
        Math.random() * window.innerHeight - window.innerHeight / 2
      ],
      transition: {
        duration: Math.random() * 1.5 + 0.8, // Duração aleatória entre 0.8s e 2.3s
        delay: Math.random() * 1.2, // Atraso aleatório para entrada
        repeat: 0,
        ease: "linear"
      },
    }),
  };

  // Variantes para o texto fixo final
  const fixedTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2.2, // Começa a aparecer quando a maioria das aleatórias já sumiram
        ease: "easeIn"
      },
    },
  };

  useEffect(() => {
    // 1. Inicia mostrando as letras aleatórias.
    // 2. Após 2.0s, instruímos o componente a preparar a revelação do texto fixo.
    const showFixedTimer = setTimeout(() => {
      setPhase('fixed');
    }, 2000);

    // 3. Após 3.8s (tempo total da animação), avisamos o App.js que acabou.
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 3800);

    return () => {
      clearTimeout(showFixedTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <AnimatePresence>
      {phase === 'random' && (
        <motion.div
          key="random-letters"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          {/* Gerador de Letras Aleatórias */}
          {Array.from({ length: totalLetters }).map((_, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="absolute text-violet-600/30 dark:text-violet-500/20 font-mono text-2xl md:text-4xl select-none"
            >
              {randomChars[Math.floor(Math.random() * randomChars.length)]}
            </motion.span>
          ))}
        </motion.div>
      )}

      {phase === 'fixed' && (
        <motion.div
          key="fixed-text"
          initial="hidden"
          animate="visible"
          variants={fixedTextVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 overflow-hidden"
        >
          {/* Texto Fixo Final */}
          <motion.h1 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2, type: 'spring' }}
            className="text-white font-extrabold text-5xl md:text-8xl tracking-tighter"
          >
            {fixedText}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnima;
