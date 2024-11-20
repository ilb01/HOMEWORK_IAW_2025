import React from "react";

const ProductFilter = ({ filterText, onFilterChange }) => {
    return (
        <input
            type="text"
            className="form-control my-3"
            placeholder="Filter by name"
            value={filterText}
            onChange={(e) => onFilterChange(e.target.value)}
        />
    );
};

export default ProductFilter;
