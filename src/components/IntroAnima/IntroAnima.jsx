import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroAnima = () => {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(800);

  // Calcula a altura da tela para sincronizar o fim da animação
  useEffect(() => {
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollEnd = vh * 1.2; // A animação dura 120% da altura da tela

  // 1. Zoom Out (Indo pro fundo) e Sumindo
  const scale = useTransform(scrollY, [0, scrollEnd], [1, 0.2]);
  const opacity = useTransform(scrollY, [0, scrollEnd * 0.8], [1, 0]);
  
  // 2. Separação e Rotação Lateral (Um tomba pra cada lado)
  const xLeft = useTransform(scrollY, [0, scrollEnd], ["0vw", "-35vw"]);
  const xRight = useTransform(scrollY, [0, scrollEnd], ["0vw", "35vw"]);
  const rotateLeft = useTransform(scrollY, [0, scrollEnd], [0, -25]);
  const rotateRight = useTransform(scrollY, [0, scrollEnd], [0, 25]);

  // 3. Fundo preto absoluto que se dissolve ("clareando" o site real)
  const bgOpacity = useTransform(scrollY, [0, scrollEnd], [1, 0]);

  // Libera os cliques no site assim que a animação termina
  const pointerEvents = useTransform(scrollY, (y) => (y > scrollEnd ? 'none' : 'auto'));

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents, // Trava a tela enquanto a animação roda, libera depois
      }}
    >
      {/* Camada Preta de Fundo */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#050505',
          opacity: bgOpacity,
        }}
      />

      {/* Textos Empilhados e Animados */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column', // Garante que fiquem um embaixo do outro
          alignItems: 'center',
          justifyContent: 'center',
          scale,
          opacity,
        }}
      >
        <motion.h1 
          style={{ 
            x: xLeft, 
            rotateZ: rotateLeft, 
            fontSize: '15vw', 
            fontWeight: 900, 
            color: '#FFFFFF', 
            margin: 0, 
            lineHeight: 0.85 
          }}
        >
          HELLO
        </motion.h1>
        
        <motion.h1 
          style={{ 
            x: xRight, 
            rotateZ: rotateRight, 
            fontSize: '15vw', 
            fontWeight: 900, 
            color: '#6d28d9', 
            margin: 0, 
            lineHeight: 0.85 
          }}
        >
          DEV!
        </motion.h1>

        {/* Indicador de Scroll interativo */}
        <motion.div style={{ position: 'absolute', bottom: '10vh' }}>
          <motion.p 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }} 
            style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '4px', textTransform: 'uppercase' }}
          >
            Scroll
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroAnima;
