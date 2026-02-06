import React from 'react';
import './_contact.scss';
// Você pode usar bibliotecas de ícones como Font Awesome ou React Icons
// Ou importar SVGs simples para os ícones
// import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const email = 'samuel.lazarin12@gmail.com';
  const whatsapp = '5511946701625'; // Formato internacional
  const linkedin = 'https://www.linkedin.com/in/samuel-lazarin/';
  const github = 'https://github.com/Lazarin123';

  return (
    <section id="contact" className="contact">
      <h2>Fale Comigo</h2>
      <p>Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo, vamos desenvolver juntos!</p>
      <div className="contact__links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact__icon-link">
          {/* <FaLinkedin /> */}
          <span className="icon-placeholder">In</span>
          <span>LinkedIn</span>
        </a>
        <a href={`mailto:${email}`} className="contact__icon-link">
          {/* <FaEnvelope /> */}
          <span className="icon-placeholder">@</span>
          <span>Email</span>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="contact__icon-link">
          {/* <FaEnvelope /> */}
          <span className="icon-placeholder">Gh</span>
          <span>GitHub</span>
        </a>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact__icon-link">
          {/* <FaWhatsapp /> */}
          <span className="icon-placeholder">Wa</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
