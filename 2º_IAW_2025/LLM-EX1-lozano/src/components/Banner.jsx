import React from 'react'

export default function Banner() {
    return (
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
    )
}
