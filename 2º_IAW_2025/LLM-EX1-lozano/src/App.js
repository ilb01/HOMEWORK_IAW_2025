import Info from './components/Info.jsx';
import Header from './components/Header.jsx';

import Product from './components/Product.jsx';
import Footer from './components/Footer.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Info />
        <Header />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

