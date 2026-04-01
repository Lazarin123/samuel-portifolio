// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'; // Mudança aqui

// const HeroSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <section className="min-h-[80vh] flex items-center justify-center bg-transparent px-4 py-20">
//       <motion.div
//         className="max-w-4xl text-center"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <motion.span
//           variants={itemVariants}
//           className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
//         >
//           Olá, eu sou Samuel Lazarin 👋
//         </motion.span>

//         <motion.h1
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6"
//         >
//           Software Engineer <br /> 
//           <span className="text-blue-600 dark:text-blue-400">& Fullstack Developer</span>
//         </motion.h1>

//         <motion.p
//           variants={itemVariants}
//           className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
//         >
//           Especialista em React e automação. Criador da Vallis Tech e focado em experiências digitais de alto nível.
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <a
//             href="#projects"
//             className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
//           >
//             Ver Projetos
//             <FaArrowRight />
//           </a>

//           <div className="flex gap-3">
//             <motion.a
//               href="https://github.com/Lazarin123"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1, y: -2 }}
//               className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
//             >
//               <FaGithub size={24} />
//             </motion.a>
//             <motion.a
//               href="https://linkedin.com/in/seu-perfil" 
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1, y: -2 }}
//               className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
//             >
//               <FaLinkedin size={24} />
//             </motion.a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  // Estado para controlar se o vídeo terminou ou se já foi visto nesta sessão
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já viu a intro nesta sessão para não repetir toda hora
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIsVideoFinished(true);
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setIsVideoFinished(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      <AnimatePresence mode="wait">
        {!isVideoFinished ? (
          /* --- TELA DO VÍDEO INTRO --- */
          <motion.div
            key="intro-video"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black"
          >
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            >
              <source src="../../assets/vídeoHero-Section.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </motion.div>
        ) : (
          /* --- CONTEÚDO DO HERO SECTION --- */
          <motion.div
            key="hero-content"
            className="max-w-4xl text-center z-10 px-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              Samuel Lazarin — Software Engineer 👋
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6"
            >
              Construindo o futuro <br /> 
              <span className="text-blue-600 dark:text-blue-400">através do código.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Fullstack Developer & Especialista em Automação. <br/>
              Transformando ideias complexas em interfaces intuitivas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Explorar Projetos
                <FaArrowRight size={18} />
              </a>

              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/Lazarin123"
                  target="_blank"
                  className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:text-blue-600"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:text-blue-600"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;