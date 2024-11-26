import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <section className="top-header">
                <div className="logo-container" style={{ "width": "20%" }}>
                    <img src="./assets/images/logo/dress.svg" className="logo" alt="" />
                </div>
                <div className="search-container">
                    <input type="text" name="search" placeholder="Enter your product name..." />
                    <i className="fa-solid fa-magnifying-glass search-btn"></i>
                </div>
                <div className="icons-container">
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                </div>
            </section>
            <nav className="main-nav">
                <Link to="/home">Home</Link>
                <Link to="/home">Categories</Link>
                <Link to="/home">Men's</Link>
                <Link to="/home">Women's</Link>
                <Link to="/home">Jewelry</Link>
                <Link to="/home">Blog</Link>
                <Link to="/home">Hot Offers</Link>
            </nav>
        </header>
    )
}
