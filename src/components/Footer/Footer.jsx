import React from "react";
import "./_footer.scss";

function Footer() {
  // Pega o ano atual automaticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; {currentYear} - Desenvolvido por{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/samuel-lazarin/"
              target="_blank"
            >
              Samuel Lazarin
            </a>
          </span>
          .
        </p>
        <div className="footer__techs">
          <small>Construído com:</small>
          <div className="footer__badges">
            <span className="badge">React</span>
            <span className="badge">Sass</span>
            <span className="badge">
              <a
                href="https://github.com/Lazarin123/samuel-portifolio"
                target="_blank"
              >
                Code Project
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
