import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import productsData from "../data/products.json";

const Home = () => {
    const [filterText, setFilterText] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <ProductFilter filterText={filterText} onFilterChange={setFilterText} />
            <div className="row">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
