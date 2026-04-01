import React from 'react';
import { motion } from 'framer-motion';
import VideoIntro from "../../assets/vídeoHero-Section.mp4";

const IntroAnima = ({ onFinished }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={onFinished} // Chama a função quando o vídeo acaba
        className="w-full h-full object-cover md:object-contain"
      >
        <source src={VideoIntro} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Botão de Pular Opcional (Caso o vídeo seja longo) */}
      <button 
        onClick={onFinished}
        className="absolute bottom-10 right-10 text-white/50 hover:text-white text-sm font-mono tracking-widest transition-all"
      >
        [ SKIP INTRO ]
      </button>
    </motion.div>
  );
};

export default IntroAnima;
