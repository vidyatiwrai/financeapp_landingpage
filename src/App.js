import './App.css';
import { NavBar } from './Component/Navbar';
import { Banner } from './Component/Banner';
import { Features } from './Component/Feature';
import {Testomonial} from "./Component/Testimonial";
import { Faq } from './Component/Freq';
import { Footer } from './Component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Features/>
      <Testomonial/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;