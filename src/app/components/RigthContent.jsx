"use client"
import "./RigthContent.css";

function RigthContent() {


  return (
    <div className="conten-rigth">
      <div>
        <img src="/dron.png" alt="" />
      </div>
      <div>
        <h2>FOTOGRAFÍA CON DRON</h2>
        <p>
        En Parabolle, ofrecemos servicios de fotografía con dron que llevan tus imágenes a nuevas alturas, capturando vistas impresionantes y perspectivas únicas que no se pueden obtener desde el suelo. Nuestro equipo de pilotos de dron certificados y fotógrafos experimentados utiliza tecnología de última generación para asegurar que cada toma aérea sea de la más alta calidad. 
        </p>
        <a href="/portafolio">
        <button className="primary-button">
          PORTAFOLIO
        </button>
        </a>
      </div>
    </div>
  );
}

export default RigthContent;
