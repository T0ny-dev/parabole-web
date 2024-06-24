import "./Branding.css"

function Branding () {
  return (
    <div className="branding">
      <div>
        <h2>FOTOGRAFÍA</h2>
        <p>En Parabolle, ofrecemos servicios de fotografía profesional para capturar tus momentos más importantes con creatividad y precisión. Nuestro equipo de fotógrafos expertos utiliza la última tecnología y técnicas innovadoras para asegurar que cada imagen cuente una historia única. </p>
        <button className="primary-button">GALERÍA</button>
      </div>
      <div>
        <img src="/brand.png" alt="" />
      </div>
    </div>
  )
}

export default Branding;