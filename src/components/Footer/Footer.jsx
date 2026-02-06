import React from "react";
import "./_footer.scss";

function Footer() {
  // Pega o ano atual automaticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; {currentYear} - Desenvolvido por <span>Samuel Lazarin</span>.
        </p>
        <div className="footer__techs">
          <small>Construído com:</small>
          <div className="footer__badges">
            <span className="badge">React</span>
            <span className="badge">JavaScript</span>
            <span className="badge">Sass</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
