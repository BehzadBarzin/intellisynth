import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Features from "./components/Features.js";
import Header from "./components/Header";
import Hero from "./components/Hero.js";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
      </div>

      {/* Button Gradient defines the svg gradient used in buttons and must me simply included here */}
      <ButtonGradient />
    </>
  );
}

export default App;
