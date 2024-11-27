import React from "react";
import { useParams } from "react-router-dom";
import CarDetail from "./CarDetail";

function CarDetailWrapper({ cars }) {
  // Usamos useParams para obtener el 'id' de la URL
  const { id } = useParams(); 

  // Verificamos si los coches están disponibles
  if (!cars || cars.length === 0) {
    return <p>Cargando coches...</p>;
  }

  // Buscamos el coche correspondiente al 'id'
  const car = cars.find((car) => car.id === id);

  if (!car) {
    return <p>Coche no encontrado.</p>;
  }

  return <CarDetail car={car} />;
}

export default CarDetailWrapper;
