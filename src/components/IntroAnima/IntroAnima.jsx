import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroAnima = () => {
  // Usamos uma referência para calcular o scroll apenas com base nesta seção
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 1. Efeito de Escala (Ir pro fundo) e Opacidade (Sumir)
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // 2. Movimentos separados (Efeito Parallax Lateral e Rotação)
  // Como estão empilhados, um vai para a esquerda, o outro para a direita
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0vw", "-40vw"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0vw", "40vw"]);
  
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -15]); 
  const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 15]); 

  return (
    <div 
      ref={containerRef} 
      style={{ 
        height: '150vh', // Altura do bloco de animação (permite scroll)
        backgroundColor: '#050505', // Fundo preto apenas na intro
        position: 'relative', 
        zIndex: 50 
      }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', // Fica um embaixo do outro
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden' 
        }}
      >
        <motion.div 
          style={{ 
            scale, 
            opacity, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          {/* HELLO vai para a esquerda */}
          <motion.h1 
            style={{ 
              x: xLeft, 
              rotateZ: rotateLeft,
              fontSize: '16vw', 
              fontWeight: 900, 
              color: '#FFFFFF', 
              margin: 0, 
              lineHeight: 0.85,
              textTransform: 'uppercase'
            }}
          >
            HELLO
          </motion.h1>

          {/* DEV! vai para a direita */}
          <motion.h1 
            style={{ 
              x: xRight, 
              rotateZ: rotateRight,
              fontSize: '16vw', 
              fontWeight: 900, 
              color: '#6d28d9', 
              margin: 0, 
              lineHeight: 0.85,
              textTransform: 'uppercase'
            }}
          >
            DEV!
          </motion.h1>
        </motion.div>
        
        {/* Indicador de scroll */}
        <motion.div 
          style={{ opacity, position: 'absolute', bottom: '2rem' }}
        >
          <motion.p 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255,255,255,0.4)', 
              letterSpacing: '0.4rem', 
              textTransform: 'uppercase', 
              margin: 0 
            }}
          >
            Scroll
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroAnima;
