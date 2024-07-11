"use client"

import React, { useState } from "react";
import "./LeftContent.css";

function LeftContent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null); // Reset selected image when closing modal
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="content-photo">
      <div>
        <h2>FOTOGRAFÍA</h2>
        <p>
          En Parabole, ofrecemos servicios de fotografía profesional para
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
              {["/01Fotos.jpg", "/02Fotos.jpg", "/03Fotos.jpg", "/04Fotos.jpg", "/05Fotos.jpg", "/06Fotos.jpg", "/07Fotos.jpg", "/09Fotos.jpg", "/010Fotos.jpg"].map((imageSrc) => (
                <img
                  key={imageSrc}
                  src={imageSrc}
                  alt="Image"
                  className={selectedImage === imageSrc ? "selected" : ""}
                  onClick={() => handleImageClick(imageSrc)}
                />
              ))}
            </div>
            <a href="/portafolio">
              <button className="more-button">VER MÁS</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftContent;
