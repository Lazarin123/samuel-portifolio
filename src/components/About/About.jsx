import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./About.scss";

export default function About() {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about__middle">
        <div className="flip-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
          <div className="card-flip-container">
            <div className={`card-flip-inner ${isFlipped ? "is-flipped" : ""}`}>
              <div className="front">
                <div className="img-placeholder">
                  <img src="Image/perfil.png" alt="Foto Samuel Lazarin" />
                </div>
              </div>
              <div className="back">
                <p className="magic-phrase">{t("about.magic_phrase")}</p>
                <span className="magic-author">{t("about.magic_author")}</span>
              </div>
            </div>
          </div>
          <p className="magic-prompt">
            {isFlipped ? t("about.click_back") : t("Clique para ver a Mágica")}
          </p>
        </div>

        <div className="about__bio">
          <h2 className="about__bio-title">{t("about.title")}</h2>
          <p className="about__text">{t("about.p1")}</p>
          <p className="about__text">
            {t("about.p2_1")} <strong>Vallis Tech</strong>, {t("about.p2_2")}
          </p>
        </div>
      </div>

      <div className="about__bottom">
        <div className="about__card">
          <h2 className="about__bio-title">{t("about.trajectory_title")}</h2>
          <p className="about__text">{t("about.trajectory_text")}</p>
        </div>
        <div className="about__card">
          <h2 className="about__bio-title">{t("about.future_title")}</h2>
          <p className="about__text">{t("about.future_text")}</p>
        </div>
      </div>
    </section>
  );
}
