import ShopPage from "./pages/ShopPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
export default function App() {
  const socialLinks = [
    { href: "#", label: "Facebook", icon: "fa-square-facebook" },
    { href: "#", label: "Twitter", icon: "fa-square-twitter" },
    { href: "#", label: "Instagram", icon: "fa-square-instagram" },
    { href: "#", label: "LinkedIn", icon: "fa-linkedin" },
  ];

  const footerLinks = [
    {
      href: "#",
      title: "Categories",
      links: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"],
    },
    {
      href: "#",
      title: "Products",
      links: ["Prices drop", "New products", "Best sales", "Contact us", "Sitemap"],
    },
    {
      href: "#",
      title: "Our Company",
      links: ["Delivery", "Legal Notice", "Terms and conditions", "About us", "Secure payment"],
    },
    {
      href: "#",
      title: "Services",
      links: ["Prices drop", "New products", "Best sales", "Contact us", "Sitemap"],
    },
  ];

  
  return (
    <div id="page">
      {/* Top information and language */}
      <section className="top-info">
        <div className="header-social-container">
          {socialLinks.map(({ href, label, icon }) => (
            <a key={label} href={href} className="social-link" aria-label={label}>
              <i className={`fa-brands ${icon}`}></i>
            </a>
          ))}
        </div>
        <div className="shipping-text">
          Free Shipping This Week Order Over 55€
        </div>
        <div>
          <select defaultValue="en" aria-label="Select language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ca">Catalan</option>
          </select>
        </div>
      </section>

      {/* Header */}
      <header>
        <section className="top-header">
          <div className="logo-container">
            <h1>DRESS</h1>
          </div>
          <select name="order" defaultValue="-1" aria-label="Sort products">
            <option value="-1">-</option>
            <option value="Aasc">Ordenar por nombre (A-Z)</option>
            <option value="Adesc">Ordenar por nombre (Z-A)</option>
            <option value="Pasc">Ordenar por precio de menor a mayor</option>
            <option value="Pdesc">Ordenar por precio de mayor a menor</option>
          </select>
          <div className="icons-container">
            <button className="icon-button" aria-label="Show favorites">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="icon-button" aria-label="Show liked items">
              <i className="fa-solid fa-heart"></i>
            </button>
            <button className="icon-button" aria-label="Reset filters">
              <i className="fa-solid fa-eraser"></i>
            </button>
          </div>
        </section>
        <nav className="main-nav">
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/store" element={<ShopPage/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </Router>
        </nav>
      </header>

      {/* Main page */}
      <main>
        {/* Banner */}
        <section className="hero">
          <h3>Trending item</h3>
          <h2>
            Women's <br />
            latest fashion sale
          </h2>
          <h4>
            Up to <span className="number">70</span>.00€
          </h4>
          <button>SHOP NOW</button>
        </section>

        <h2>New Products</h2>

        {/* Grid */}
        <section className="product-grid">
          
        </section>
      </main>

      {/* Footer */}
      <footer>
        <nav className="footer-nav">
          {footerLinks.map((section, index) => (
            <ul key={index} className="footer-nav-list">
              <li>
                <h2 className="nav-title">{section.title}</h2>
              </li>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={section.href}>{link}</a>
                </li>
              ))}
            </ul>
          ))}

        </nav>

        <section className="footer-bottom">
          <img
            src="./assets/images/payment.png"
            alt="Accepted payment methods"
            className="payment-img"
          />
          <p className="copyright">
            Copyright &copy; Dress all rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
}

