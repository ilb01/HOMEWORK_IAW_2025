import TopInfo from './components/TopInfo'
import Footer from './components/Footer'
import HomePage from './page/HomePage'
import AddPage from './page/AddPage'
import HotOffersPage from './page/HotOffersPage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getProducts from './service/ProductsService'
import './App.css';

export default function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts(setProducts, setLoading);
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <Router>
                <TopInfo />
                <Routes>
                    <Route path="/home" element={<HomePage products={products}
                        setProducts={setProducts} />} />
                    <Route path="/offers" element={<HotOffersPage />} />
                    <Route path="/add" element={<AddPage products={products}
                        setProducts={setProducts} />} />
                    <Route path="*" element={<HomePage products={products}
                        setProducts={setProducts} />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}