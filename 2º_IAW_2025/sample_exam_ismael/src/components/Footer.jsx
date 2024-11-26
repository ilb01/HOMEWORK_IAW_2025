import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <nav className="footer-nav">
                <ul className="footer-nav-list">
                    <li>
                        <h2 className="nav-title">Categories</h2>
                    </li>
                    <li><Link to="/">Fashion</Link></li>
                    <li><Link to="/">Electronic</Link></li>
                    <li><Link to="/">Cosmetic</Link></li>
                    <li><Link to="/">Health</Link></li>
                    <li><Link to="/">Watches</Link></li>
                </ul>

                <ul className="footer-nav-list">
                    <li>
                        <h2 className="nav-title">Products</h2>
                    </li>
                    <li><Link to="/">Prices drop</Link></li>
                    <li><Link to="/">New products</Link></li>
                    <li><Link to="/">Best sales</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/">Sitemap</Link></li>
                </ul>

                <ul className="footer-nav-list">
                    <li>
                        <h2 className="nav-title">Our Company</h2>
                    </li>
                    <li><Link to="/">Delivery</Link></li>
                    <li><Link to="/">Legal Notice</Link></li>
                    <li><Link to="/">Terms and conditions</Link></li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Secure payment</Link></li>
                </ul>

                <ul className="footer-nav-list">
                    <li>
                        <h2 className="nav-title">Services</h2>
                    </li>
                    <li><Link to="/">Prices drop</Link></li>
                    <li><Link to="/">New products</Link></li>
                    <li><Link to="/">Best sales</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/">Sitemap</Link></li>
                </ul>
            </nav>

            <section className="footer-bottom">
                {/* Accediendo al archivo desde public/assets/images/payment.png */}
                <img src="/assets/images/payment.png" alt="payment method" className="payment-img" />
                <p className="copyright">
                    Copyright &copy; Dress all rights reserved.
                </p>
            </section>
        </footer>
    );
}
