import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Planets from "./pages/Planets";


export default function App() {
  return (
    // rutas de paginas 
    <Router>
      <Header />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Characters />} />
      </Routes>
      <Footer />
    </Router>
  );
}
