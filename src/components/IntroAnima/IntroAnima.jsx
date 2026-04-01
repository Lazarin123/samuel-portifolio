import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroAnima = () => {
  const { scrollYProgress } = useScroll();

  // 1. Efeito de "Ir para o fundo" (Escala diminui) e sumir
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // 2. Separação e Rotação das palavras (HELLO vai pra esquerda, DEV vai pra direita)
  const xLeft = useTransform(scrollYProgress, [0, 0.3], [0, -20vw]);
  const xRight = useTransform(scrollYProgress, [0, 0.3], [0, 20vw]);
  const rotateLeft = useTransform(scrollYProgress, [0, 0.3], [0, -25]); // Gira -25 graus
  const rotateRight = useTransform(scrollYProgress, [0, 0.3], [0, 25]); // Gira 25 graus

  // Fundo preto dissolve
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
      <motion.div 
        style={{ 
          opacity: bgOpacity,
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          backgroundColor: '#050505',
          pointerEvents: 'none'
        }}
      />
      
      <div style={{ height: '180vh', position: 'relative', width: '100%' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', zIndex: 110 }}>
          
          {/* Container que vai "pro fundo" (escala reduzida) */}
          <motion.div style={{ scale, opacity, display: 'flex', gap: '4vw', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Palavra HELLO (Vai pra esquerda e tomba de lado) */}
            <motion.h1 
              style={{ 
                x: xLeft, 
                rotateZ: rotateLeft,
                fontSize: '15vw', 
                fontWeight: 900, 
                color: '#FFFFFF', 
                margin: 0, 
                lineHeight: 0.8 
              }}
            >
              HELLO
            </motion.h1>

            {/* Palavra DEV! (Vai pra direita e tomba pro outro lado) */}
            <motion.h1 
              style={{ 
                x: xRight, 
                rotateZ: rotateRight,
                fontSize: '15vw', 
                fontWeight: 900, 
                color: '#6d28d9', 
                margin: 0, 
                lineHeight: 0.8 
              }}
            >
              DEV!
            </motion.h1>

          </motion.div>
          
          {/* Indicador de scroll */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-10"
          >
            <motion.p 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.4rem', textTransform: 'uppercase', margin: 0 }}
            >
              Scroll
            </motion.p>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default IntroAnima;
