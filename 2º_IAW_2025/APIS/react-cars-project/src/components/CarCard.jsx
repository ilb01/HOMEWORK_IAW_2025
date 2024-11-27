import React, { useState } from "react";

function CarCard({ car }) {
  const [showDetails, setShowDetails] = useState(false);  // Estado para mostrar/ocultar detalles

  const handleClick = () => {
    setShowDetails(!showDetails);  // Alterna la visibilidad de los detalles al hacer clic
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();  // Permite alternar detalles también con el teclado
    }
  };

  return (
    <div
      className="car-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}  // Hace que la tarjeta sea enfocada
      role="button"  // Indica que la tarjeta es un botón
      aria-label={`Ver detalles de ${car.car} ${car.car_model}`}
    >
      <h3>{car.car} {car.car_model}</h3>
      <p>Año: {car.car_model_year}</p>
      <p>Color: {car.car_color || "No disponible"}</p>
      <p>Precio: {car.price || "No disponible"}</p>
      <p>Disponibilidad: {car.availability ? "Disponible" : "No disponible"}</p>

      {showDetails && (  // Si showDetails es true, muestra los detalles adicionales
        <div className="car-details">
          <p><strong>VIN:</strong> {car.car_vin || "No disponible"}</p>
        </div>
      )}
    </div>
  );
}

export default CarCard;
