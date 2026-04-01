import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroAnima = () => {
  const { scrollYProgress } = useScroll();

  // Transformações baseadas no scroll (0 a 1)
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="intro-container" style={{ position: 'relative', width: '100%' }}>
      {/* Camada de fundo fixa que bloqueia o site no início */}
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
      
      <div className="intro-scroll-setter" style={{ height: '200vh' }}>
        <div className="intro-sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', zIndex: 110 }}>
          <motion.div 
            style={{ scale, opacity, y: yText, textAlign: 'center', pointerEvents: 'none' }}
          >
            <h1 className="intro-title" style={{ fontSize: '16vw', fontWeight: 900, lineHeight: 0.8, margin: 0, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
              HELLO
            </h1>
            <h1 className="intro-title" style={{ fontSize: '16vw', fontWeight: 900, lineHeight: 0.8, margin: 0, color: '#6d28d9', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
              DEV!
            </h1>
            
            <motion.div 
              animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.4rem', textTransform: 'uppercase' }}
            >
              Scroll to Explore
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnima;
