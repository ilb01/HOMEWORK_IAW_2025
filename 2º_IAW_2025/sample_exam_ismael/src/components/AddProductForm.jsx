import React, { useState } from "react";

const AddProductForm = ({ addProduct }) => {
    const [discountCode, setDiscountCode] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stars, setStars] = useState(0);

    const calculateDiscount = (code) => {
        if (code === "BLACK") return 15;
        if (code === "SUMMER") return 10;
        return 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const discount = calculateDiscount(discountCode.toUpperCase());
        const discountedPrice = price - (price * discount) / 100;

        // Crear un nuevo producto
        const newProduct = {
            id: Date.now(), // Usamos Date.now() para generar un ID único
            name: productName,
            description: description,
            price: parseFloat(price),
            stars: parseFloat(stars),
            discount: discount,
            finalPrice: discountedPrice.toFixed(2),
        };

        // Enviar el nuevo producto al componente principal
        addProduct(newProduct);

        // Limpiar el formulario
        setProductName("");
        setDescription("");
        setPrice("");
        setStars(0);
        setDiscountCode("");
        alert(`Product "${newProduct.name}" added with a discount of ${discount}%`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                    type="text"
                    id="productName"
                    className="form-control"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                    type="number"
                    id="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="stars" className="form-label">Stars (1-5)</label>
                <input
                    type="number"
                    id="stars"
                    className="form-control"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                    min="1"
                    max="5"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="discountCode" className="form-label">Discount Code</label>
                <input
                    type="text"
                    id="discountCode"
                    className="form-control"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
};

export default AddProductForm;
