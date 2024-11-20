import React from 'react'
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
export default function Footer() {
    return (
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
    )
}
