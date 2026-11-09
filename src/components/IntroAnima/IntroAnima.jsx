import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  useMotionValue,
} from "framer-motion";

// Suaviza o movimento das cortinas (ease in-out)
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const Copy = ({ eyebrow, lines, hidden }) => {
  const Title = hidden ? "div" : "h1";
  return (
    <div className="ia-copy" aria-hidden={hidden || undefined}>
      <p className="ia-eyebrow">{eyebrow}</p>
      <Title className="ia-title">
        {lines.map((line, i) => (
          <span className="ia-line" key={line}>
            <span className="ia-line-in" style={{ "--i": i }}>
              {line}
            </span>
          </span>
        ))}
      </Title>
    </div>
  );
};

const IntroAnima = ({
  eyebrow = "Engenharia, criatividade e inovação.",
  lines = ["Transformando", "ideias em", "realidade."],
  hint = "Role para explorar",
  background = "#07070a",
  zIndex = 30,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();

  // Progresso 0 → 1 enquanto a seção fica "pinada" na tela
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const still = useMotionValue(0);
  const p = reduce ? still : scrollYProgress;

  // Quando a intro termina, esconde a camada fixa (não fica nada cobrindo o site)
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (reduce) return undefined;
    const update = (v) => setDone(v >= 0.999);
    update(scrollYProgress.get());
    return scrollYProgress.on("change", update);
  }, [reduce, scrollYProgress]);

  // Metades se afastam
  const topY = useTransform(p, [0.05, 1], ["0%", "-100%"], { ease });
  const botY = useTransform(p, [0.05, 1], ["0%", "100%"], { ease });

  // Linha de luz some assim que a fenda começa a abrir
  const seamOpacity = useTransform(p, [0.02, 0.12], [1, 0]);

  // Luz que aparece atrás das metades
  const glowOpacity = useTransform(p, [0, 0.08, 0.45, 0.92], [0, 1, 1, 0]);
  const glowScale = useTransform(p, [0.05, 1], [0.4, 1.15]);

  // Indicador de scroll
  const hintOpacity = useTransform(p, [0, 0.08], [1, 0]);

  const copy = <Copy eyebrow={eyebrow} lines={lines} />;
  const copyClone = <Copy eyebrow={eyebrow} lines={lines} hidden />;

  return (
    <div
      ref={ref}
      className={`ia-section${reduce ? " ia-static" : ""}${
        inView ? "" : " ia-paused"
      }`}
      style={{ "--ia-bg": background, "--ia-z": zIndex }}
    >
      <style>{css}</style>

      <div className={`ia-stage${done ? " ia-done" : ""}`}>
        {/* Luz atrás das metades */}
        <motion.div
          className="ia-glow"
          aria-hidden="true"
          style={{ opacity: glowOpacity, scaleY: glowScale }}
        />

        {/* Metade de cima (mostra só a parte de cima do título) */}
        <motion.div className="ia-half ia-half--top" style={{ y: topY }}>
          <div className="ia-half-in">{copy}</div>
        </motion.div>

        {/* Metade de baixo (cópia decorativa do mesmo título) */}
        <motion.div
          className="ia-half ia-half--bot"
          aria-hidden="true"
          style={{ y: botY }}
        >
          <div className="ia-half-in">{copyClone}</div>
        </motion.div>

        {/* Linha de luz no corte */}
        <motion.div
          className="ia-seam"
          aria-hidden="true"
          style={{ opacity: seamOpacity }}
        />

        {/* Indicador de scroll */}
        <motion.div
          className="ia-hint"
          aria-hidden="true"
          style={{ opacity: hintOpacity }}
        >
          <span>{hint}</span>
          <i className="ia-hint-line" />
        </motion.div>
      </div>
    </div>
  );
};

const css = `
.ia-section {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: none;
  min-height: 0;
  margin: 0;
  padding: 0;
  /* 100svh de rolagem "pinada" + 100svh da própria tela */
  height: 210vh;
  height: 210svh;
  /* A próxima seção (hero) começa 100svh antes do fim e sobe por trás das metades */
  margin-bottom: -100vh;
  margin-bottom: -100svh;
}
@media (max-width: 640px) {
  .ia-section { height: 190vh; height: 190svh; }
}
.ia-section.ia-static {
  height: 100vh;
  height: 100svh;
  margin-bottom: 0;
}
 
.ia-stage {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  contain: layout paint;
  isolation: isolate;
  z-index: var(--ia-z, 30);
  pointer-events: none;
}
.ia-stage.ia-done { visibility: hidden; }
.ia-static .ia-stage { position: relative; }
 
/* Luz */
.ia-glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  will-change: transform, opacity;
  background: radial-gradient(
    ellipse 70% 45% at 50% 50%,
    rgba(124, 58, 237, 0.65) 0%,
    rgba(6, 182, 212, 0.22) 45%,
    rgba(7, 7, 10, 0) 72%
  );
}
 
/* Metades */
.ia-half {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  overflow: hidden;
  z-index: 1;
  background: var(--ia-bg);
  will-change: transform;
}
.ia-half--top { top: 0; }
.ia-half--bot { bottom: 0; }
 
/* Cada metade guarda o título inteiro, alinhado à tela toda */
.ia-half-in {
  position: absolute;
  left: 0;
  right: 0;
  height: 200%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
}
.ia-half--top .ia-half-in { top: 0; }
.ia-half--bot .ia-half-in { bottom: 0; }
 
/* Texto */
.ia-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: clamp(0.9rem, 2.5vw, 1.6rem);
  font-family: inherit;
}
.ia-eyebrow {
  margin: 0;
  font-size: clamp(0.85rem, 2.4vw, 1.1rem);
  font-weight: 500;
  color: #a78bfa;
  animation: ia-fade 0.9s ease 0.55s both;
}
.ia-title {
  margin: 0;
  font-size: clamp(2.4rem, 10.5vw, 7.5rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.045em;
}
.ia-line {
  display: block;
  overflow: hidden;
  padding: 0.04em 0.06em 0.1em;
}
.ia-line-in {
  display: inline-block;
  background: var(--g);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ia-rise 1s cubic-bezier(0.2, 0.8, 0.2, 1)
    calc(0.15s + var(--i) * 0.12s) both;
}
.ia-line:nth-child(1) .ia-line-in { --g: linear-gradient(100deg, #ffffff, #c4b5fd); }
.ia-line:nth-child(2) .ia-line-in { --g: linear-gradient(100deg, #c4b5fd, #8b5cf6); }
.ia-line:nth-child(3) .ia-line-in { --g: linear-gradient(100deg, #8b5cf6, #22d3ee); }
 
/* Linha de luz */
.ia-seam {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  margin-top: -1px;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, #8b5cf6 25%, #06b6d4 75%, transparent);
  box-shadow: 0 0 12px 1px rgba(139, 92, 246, 0.7);
  animation: ia-draw 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
 
/* Indicador de scroll */
.ia-hint {
  position: absolute;
  left: 50%;
  bottom: calc(5vh + env(safe-area-inset-bottom, 0px));
  bottom: calc(5svh + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  pointer-events: none;
  font-size: 0.8rem;
  color: #a78bfa;
  white-space: nowrap;
  animation: ia-fade 0.9s ease 1.1s both;
}
.ia-hint-line {
  position: relative;
  display: block;
  width: 1px;
  height: 28px;
  overflow: hidden;
  background: rgba(167, 139, 250, 0.25);
}
.ia-hint-line::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 10px;
  background: #c4b5fd;
  animation: ia-drop 1.6s ease-in-out infinite;
}
 
@keyframes ia-rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
@keyframes ia-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ia-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes ia-drop { from { transform: translateY(-12px); } to { transform: translateY(30px); } }
 
/* Pausa animações infinitas quando a intro não está visível */
.ia-paused .ia-hint-line::after { animation-play-state: paused; }
 
@media (prefers-reduced-motion: reduce) {
  .ia-seam, .ia-eyebrow, .ia-line-in, .ia-hint, .ia-hint-line::after {
    animation: none !important;
  }
  .ia-hint { display: none; }
}
`;

export default IntroAnima;
