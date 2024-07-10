import React from "react";
import "./Branded.css";

const Branded = () => {
  // Array de URLs de las imágenes de los logros de los clientes
  const logos = [
    "/01logo.png",
    "/02logo.png",
    "/03logo.png",
    "/04logo.png",
  ];

  return (
    <div className="logos-container">
      {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Branded;
