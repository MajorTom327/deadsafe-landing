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
      <Paralax img={SafeImage} className="h-[32rem] relative group z-10">
        <div className="flex flex-col justify-center items-center gap-4 h-full ">
          <div className=" z-30 flex flex-col gap-4 text-4xl bg-dark/40 p-4 group-hover:bg-dark/75 text-center w-full mt-16">
            <div>Keep your keys safe.</div>
            <div>Stay alive</div>
          </div>
        </div>
        <div className="z-20 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0 bg-dark/70"></div>
      </Paralax>
      <Footer />
    </div>
  );
}

export default App;
