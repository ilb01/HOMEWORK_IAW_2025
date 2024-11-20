import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HotOffers from "./pages/HotOffers";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/hot-offers">Hot Offers</Link>
            <Link className="nav-link" to="/add-product">Add Product</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-offers" element={<HotOffers />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
