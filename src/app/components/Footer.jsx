// src/Footer.js
import React from 'react';
import './Footer.css'; // Importamos el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src="/logo-white.png" alt="logo" className="footer-logo" />
        <p className="footer-text">En Parabole Productions somos especialistas en la producción de videos corporativos. Realizamos tanto videos de tipo institucional hasta de inducción o capacitación de personal coporativo.</p>
      </div>
      <div className="footer-column">
        <h4>Enlaces</h4>
        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobrenosotros">Sobre Nosotros</a></li>
          <li><a href="#portafolio">Portafolio</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <h4>Redes Sociales</h4>
        <ul className="footer-socials">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Información Adicional</h4>
        <p className="footer-text">Parabole Media Creators es una agencia dedicada a impulsar tu marca a través de tres pilares fundamentales: creación de contenido en video, gestión de redes sociales e identidad corporativa.</p>
      </div>
    </footer>
  );
}

export default Footer;
