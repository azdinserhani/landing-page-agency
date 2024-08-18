import Navbar from "./components/Navbar/Navbar"
import "./App.scss"
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services.jsx";
import Mession from "./components/Mession/Mession.jsx";
import Highlights from "./components/Highlights/Highlights.jsx";
import Philosophy from "./components/Philosophy/Philosophy.jsx";
import Portofolio from "./components/Portofolio/Portofolio.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <section><Hero/></section>
      <section><Services/></section>
      <Mession/>
      <section><Highlights/></section>
      <Philosophy/>
      <Portofolio />
      <About/>
      <section><Contact/></section>
    </div>
  );
}

export default App
