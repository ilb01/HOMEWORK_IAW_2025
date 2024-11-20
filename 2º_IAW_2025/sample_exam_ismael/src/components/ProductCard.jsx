import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <div className="card product-card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p>
                    <strong>Price:</strong> ${product.price}{" "}
                    {product.discount >= 50 && <span className="badge bg-success">50% Discount</span>}
                </p>
                <p>
                    <strong>Rating:</strong>{" "}
                    {product.stars > -1 && (
                        <div className="score">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <FaStar key={i} color={product.stars > i ? "gold" : "lightgray"} />
                            ))}
                        </div>
                    )}

                </p>
            </div>
        </div>
    );
};

export default ProductCard;
