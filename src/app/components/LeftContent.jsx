"use client"

import React, { useState } from "react";
import "./LeftContent.css";

function LeftContent() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="content-photo">
      <div>
        <h2>FOTOGRAFÍA</h2>
        <p>
          En Parabolle, ofrecemos servicios de fotografía profesional para
          capturar tus momentos más importantes con creatividad y precisión.
          Nuestro equipo de fotógrafos expertos utiliza la última tecnología y
          técnicas innovadoras para asegurar que cada imagen cuente una historia
          única.
        </p>
        <button className="primary-button" onClick={openModal}>
          GALERÍA
        </button>
      </div>
      <div>
        <img src="/foto.png" alt="" />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className="image-gallery">
              <img src="/image1.jpg" alt="Image 1" />
              <img src="/image2.jpg" alt="Image 2" />
              <img src="/image3.jpg" alt="Image 3" />
              <img src="/image4.jpg" alt="Image 4" />
              {/* Agrega más imágenes según sea necesario */}
            </div>
            <button className="more-button">VER MÁS</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftContent;
