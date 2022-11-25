import Navbar from "./components/Navbar";
import Paralax from "./components/Paralax";

import HeaderImage from "./assets/bg-2.jpeg";
import SeparatorImage from "./assets/bg-1.jpeg";
import SafeImage from "./assets/safe.jpeg";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
    <div>
      <Navbar />
      <Paralax img={HeaderImage}>
        <div className="flex flex-col justify-center gap-4 h-full group">
          <div className="bg-dark/30 text-4xl p-4 group-hover:bg-dark/70 transition w-full text-center">
            Dead are coming...
          </div>
          <div className="bg-dark/30 text-4xl p-4 group-hover:bg-dark/70 transition w-full text-center">
            The Vault is waiting.
          </div>
        </div>
      </Paralax>
      <Hero />
      <Paralax img={SeparatorImage} />
      <Features />
      <Paralax img={SafeImage} className="h-[32rem]">
        <div className="flex flex-col justify-center items-center gap-4 h-full group">
          <div className="flex flex-col gap-4 text-4xl bg-dark/40 p-4 group-hover:bg-dark/75 text-center w-full mt-16">
            <div>Keep your keys safe.</div>
            <div>Stay alive</div>
          </div>
        </div>
      </Paralax>
      <Footer />
    </div>
  );
}

export default App;
