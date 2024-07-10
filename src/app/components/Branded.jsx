import React from "react";
import "./Branded.css";

const Branded = () => {
  // Array de URLs de las imágenes de los logros de los clientes
  const logos = [
    "https://i.ibb.co/cwnWwVF/01Logo.png",
    "https://i.ibb.co/6Y973Mj/02Logo.png",
    "https://i.ibb.co/XSDvz8z/03Logo.png",
    "https://i.ibb.co/PY7Dg72/04Logo.png",
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
