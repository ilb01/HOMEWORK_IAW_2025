import React from 'react'

export default function Info() {
    const socialLinks = [
        { href: "#", label: "Facebook", icon: "fa-square-facebook" },
        { href: "#", label: "Twitter", icon: "fa-square-twitter" },
        { href: "#", label: "Instagram", icon: "fa-square-instagram" },
        { href: "#", label: "LinkedIn", icon: "fa-linkedin" },
    ];

    return (
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

    )
}
