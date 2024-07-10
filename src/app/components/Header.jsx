// src/Header.js
import React from 'react';
import './Header.css'; // Importamos el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
      <div className="logo">
        <a href="/">
          <img src="/logo.svg" alt="" />
        </a>
      </div>
        <a href="/">Inicio</a>
        <a href="/#mision">Sobre Nosotros</a>
        <a href="/portafolio">Portafolio</a>
        <a href="/#contacto">| &nbsp;&nbsp;&nbsp;&nbsp;Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
