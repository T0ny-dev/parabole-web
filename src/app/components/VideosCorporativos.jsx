"use client"

import React, { useState } from "react";
import "./VideosCorporativos.css";

function VideosCorporativos() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-video">
      <div className="Video">
        <div>
          <img src="/video.png" alt="" />
        </div>
        <div className="bg-seccion">
          <h2>Videos Corporativos</h2>
          <p>
            Nuestro servicio de videos corporativos en Parabole Media Creators
            se especializa en crear contenido audiovisual de alta calidad que
            refleja la identidad y los valores de tu empresa.
          </p>
          <button className="primary-button" onClick={openModal}>
            DEMO <span>REEL</span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideosCorporativos;
