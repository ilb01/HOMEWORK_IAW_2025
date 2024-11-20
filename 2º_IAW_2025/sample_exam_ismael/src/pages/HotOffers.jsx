import React from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

const HotOffers = () => {
    const hotProducts = productsData.filter((product) => product.discount >= 30);

    return (
        <div>
            <h2>Hot Offers</h2>
            <div className="row">
                {hotProducts.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotOffers;
