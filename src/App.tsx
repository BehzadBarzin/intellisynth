import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      {/* Button Gradient defines the svg gradient used in buttons and must me simply included here */}
      <ButtonGradient />
    </>
  );
}

export default App;
