import styles from "./page.module.css";
import Header from "./components/Header";
import Navbar from "./components/NavbarMobiles";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Title from "./components/Title";
import VideosCorporativos from "./components/VideosCorporativos";
import LeftContent from "./components/LeftContent";
import RigthContent from "./components/RigthContent";
import RedesSociales from "./components/RedesSociales";
import PaginasWeb from "./components/PaginaWeb";
import Branding from "./components/Branding";
import ContactForm from "./components/ContactForm";
import Branded from "./components/Branded";
import Footer from "./components/Footer";
import "./globals.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Navbar/>
      <Hero/>
      <Description/>
      <Title/>
      <VideosCorporativos/>
      <LeftContent/>
      <RigthContent/>
      <RedesSociales/>
      <PaginasWeb/>
      <Branding/>
      <div className="Title_services">
        <h2>“Ellos confian en nosotros”</h2>
      </div>
      <div className="Title_services">
        <h2>Contacto</h2>
      </div>
      <Branded/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
