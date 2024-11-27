import React from "react";

function CarDetail({ car }) {
  if (!car) {
    return <p>Coche no encontrado.</p>;
  }

  return (
    <div className="car-detail">
      <h2>{car.make} {car.model}</h2>
      <p><strong>Año:</strong> {car.year}</p>
      <p><strong>Color:</strong> {car.color}</p>
      <p><strong>Precio:</strong> ${car.price}</p>
      <p><strong>Descripción:</strong> {car.description}</p>
      <img src={car.imageUrl} alt={car.model} />
    </div>
  );
}

export default CarDetail;
