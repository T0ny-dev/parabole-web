import "./Branding.css"

function Branding () {
  return (
    <div className="branding">
      <div>
        <h2>BRANDING</h2>
        <p>En Parabolle, entendemos la importancia de una identidad de marca sólida y coherente. Nuestro servicio de branding se enfoca en crear y desarrollar una imagen de marca única que refleje la esencia y los valores de tu empresa. Trabajamos estrechamente contigo para diseñar logotipos, paletas de colores, tipografías y otros elementos visuales que capturen la personalidad de tu marca y resuenen con tu público objetivo. Nuestro objetivo es ayudarte a destacar en un mercado competitivo y construir una conexión emocional duradera con tus clientes. </p>
        <a href="/portafolio">
          <button className="primary-button">PORTAFOLIO</button>
        </a>
      </div>
      <div>
        <img src="/brand.png" alt="" />
      </div>
    </div>
  )
}

export default Branding;