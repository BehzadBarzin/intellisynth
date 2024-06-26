import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Collaboration from "./components/Collaboration.js";
import Features from "./components/Features.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import Hero from "./components/Hero.js";
import Pricing from "./components/Pricing.js";
import Roadmap from "./components/Roadmap.js";
import Services from "./components/Services.js";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      {/* Button Gradient defines the svg gradient used in buttons and must me simply included here */}
      <ButtonGradient />
    </>
  );
}

export default App;
