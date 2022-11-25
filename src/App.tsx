import Navbar from "./components/Navbar";
import Paralax from "./components/Paralax";

import firstImage from "./assets/bg-2.jpeg";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paralax img={firstImage} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
