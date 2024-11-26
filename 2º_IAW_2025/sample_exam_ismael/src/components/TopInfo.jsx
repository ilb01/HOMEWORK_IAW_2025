import { Link } from 'react-router-dom'

export default function Top_Info() {
  return (
    <section className="top-info">
      <div className="header-social-container">
        <Link to="/" className="social-link">
          <i className="fa-brands fa-square-facebook"></i>
        </Link>
        <Link to="/" className="social-link">
          <i className="fa-brands fa-square-twitter"></i>
        </Link>
        <Link to="/" className="social-link">
          <i className="fa-brands fa-square-instagram"></i>
        </Link>
        <Link to="/" className="social-link">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
      <div className="shipping-text">
        Free Shipping This Week Order Over 55€
      </div>
      <div>
        <select>
          <option value="en" selected>English</option>
          <option value="en">Spanish</option>
          <option value="ca">Catalan</option>
        </select>
      </div>
    </section>
  )
}
