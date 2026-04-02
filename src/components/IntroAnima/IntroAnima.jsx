import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroAnima = () => {
  const { scrollY } = useScroll();

  // A animação acontece enquanto você rola os primeiros 500 pixels
  const scale = useTransform(scrollY, [0, 500], [1, 0.2]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Letras separam e giram
  const xLeft = useTransform(scrollY, [0, 500], ["0vw", "-40vw"]);
  const xRight = useTransform(scrollY, [0, 500], ["0vw", "40vw"]);
  const rotateLeft = useTransform(scrollY, [0, 500], [0, -20]);
  const rotateRight = useTransform(scrollY, [0, 500], [0, 20]);

  // Fundo preto e eventos de clique desativam quando a animação termina!
  const bgOpacity = useTransform(scrollY, [0, 600], [1, 0]);
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Camada Preta que esmaece revelando o site original embaixo */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#050505",
            opacity: bgOpacity,
            zIndex: -1,
          }}
        />

        {/* Textos que animam */}
        <motion.div
          style={{
            scale,
            opacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.h1
            style={{
              x: xLeft,
              rotateZ: rotateLeft,
              fontSize: "15vw",
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 0.85,
              textTransform: "uppercase",
            }}
          >
            HELLO
          </motion.h1>

          <motion.h1
            style={{
              x: xRight,
              rotateZ: rotateRight,
              fontSize: "15vw",
              fontWeight: 900,
              color: "#6d28d9",
              margin: 0,
              lineHeight: 0.85,
              textTransform: "uppercase",
            }}
          >
            DEV!
          </motion.h1>
        </motion.div>

        {/* Scroll hint */}
        <motion.div style={{ opacity, position: "absolute", bottom: "10vh" }}>
          <motion.p
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.4rem",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Scroll Down
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroAnima;
