import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Main from "./components/Main/Main"
import PreFooter from "./components/PreFooter/PreFooter"
import Footer from "./components/Footer/Footer"
import img from './assets/resize window.png'

export default function App() {
  return (
    <>

      <div className="avant-responsive">
        <img src={img} alt="" />
        <p>Ce site n'est pas autorisé sur cet appareil. Veuillez utiliser un périphérique plus adapté.</p>
      </div>


      <NavBar />
      <Hero />
      <Main />
      <PreFooter />
      <Footer />

    </>
  )
}
