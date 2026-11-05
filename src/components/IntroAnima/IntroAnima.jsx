import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroAnima = () => {
  const { scrollY } = useScroll();

  // Animação sincronizada com a rolagem nos primeiros 600px
  // 1. Efeito do Texto: escala gigante, desfaz a opacidade e adiciona desfoque (blur)
  const textScale = useTransform(scrollY, [0, 500], [1, 2.5]);
  const textOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const textBlur = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(20px)"]);

  // 2. Transição das cortinas do fundo (Abertura para cima e para baixo)
  const topCurtainY = useTransform(scrollY, [0, 600], ["0%", "-100%"]);
  const bottomCurtainY = useTransform(scrollY, [0, 600], ["0%", "100%"]);

  // 3. Efeito de expansão do Portal de Luz central
  const portalScale = useTransform(scrollY, [0, 500], [0.8, 3]);
  const portalOpacity = useTransform(scrollY, [0, 400], [0.6, 0]);

  // Desativa cliques/eventos e oculta a camada fixa após a animação
  const pointerEvents = useTransform(scrollY, [0, 600], ["auto", "none"]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: pointerEvents,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Cortina Superior */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50vh",
            backgroundColor: "#0a0a0c",
            y: topCurtainY,
            zIndex: 1,
            borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
          }}
        />

        {/* Cortina Inferior */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50vh",
            backgroundColor: "#0a0a0c",
            y: bottomCurtainY,
            zIndex: 1,
            borderTop: "1px solid rgba(139, 92, 246, 0.3)",
          }}
        />

        {/* Portal de Luz Central (Glow Background) */}
        <motion.div
          style={{
            position: "absolute",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(6,182,212,0) 70%)",
            scale: portalScale,
            opacity: portalOpacity,
            filter: "blur(40px)",
            zIndex: 2,
          }}
        />

        {/* Bloco de Texto Principal */}
        <motion.div
          style={{
            scale: textScale,
            opacity: textOpacity,
            filter: textBlur,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <motion.span
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.8rem",
              color: "#a78bfa",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            ENGENHARIA, CRIATIVIDADE E INOVAÇÃO.
          </motion.span>

          <motion.h1
            style={{
              fontSize: "4rem",
              fontWeight: 900,
              marginTop: 15,
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              background:
                "linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              dropShadow: "0 10px 20px rgba(139, 92, 246, 0.3)",
            }}
          >
            TRANSFORMANDO IDEIAS EM REALIDADE.
          </motion.h1>
        </motion.div>

        {/* Indicador de Scroll Futurista */}
        <motion.div
          style={{
            opacity: textOpacity,
            position: "absolute",
            bottom: "6vh",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            style={{
              fontSize: "0.75rem",
              color: "#a78bfa",
              letterSpacing: "0.5rem",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            ROLE PARA EXPLORAR
          </motion.p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{
              width: "2px",
              height: "24px",
              background: "linear-gradient(to bottom, #8b5cf6, transparent)",
              borderRadius: "2px",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroAnima;
