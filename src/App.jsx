import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/Header";
import Tariffs from "./components/Tariffs/Tariffs";
import Content from "./components/Top/Top";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Tariffs />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
