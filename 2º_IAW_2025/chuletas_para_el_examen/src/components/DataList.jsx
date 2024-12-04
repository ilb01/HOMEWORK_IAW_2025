import React, { useState } from 'react';
import GridContainer from './GridContainer';

const DataList = ({ data }) => {
  // Estado para controlar la película seleccionada
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Función para manejar el clic en la portada
  const handleClick = (movie) => {
    if (selectedMovie?.id === movie.id) {
      setSelectedMovie(null); // Desmarcar película si se hace clic otra vez
    } else {
      setSelectedMovie(movie); // Marcar película como seleccionada
    }
  };

  return (
    <GridContainer>
      {data
        .sort((a, b) => (b.entreno === true ? 1 : 0) - (a.entreno === true ? 1 : 0)) // Ordenar por entreno
        .map((movie) => (
          <div
            key={movie.id}
            className={`container ${selectedMovie?.id === movie.id ? 'selected' : ''}`}
          >
            <div className="content">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="poster"
                onClick={() => handleClick(movie)}
              />
              {/* Mostrar la etiqueta de "Entreno" solo si la película tiene "entreno" */}
              {movie.entreno && (
                <div className="entreno-tag">Entreno</div>
              )}
              {/* Mostrar detalles solo si la película está seleccionada */}
              {selectedMovie?.id === movie.id && (
                <div className="movie-details">
                  <h1 className="movie-title">{movie.title}</h1>
                  <p className="overview">{movie.overview}</p>
                  <div className="details">
                    <div className="detail">
                      <strong>Release Date:</strong> {movie.release_date}
                    </div>
                    <div className="detail">
                      <strong>Rating:</strong> {movie.vote_average}
                    </div>
                    <div className="detail">
                      <strong>Vote Count:</strong> {movie.vote_count}
                    </div>
                    <div className="detail">
                      <strong>Popularity:</strong> {movie.popularity}
                    </div>
                    <div className="detail">
                      <strong>Original Language:</strong> {movie.original_language.toUpperCase()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </GridContainer>
  );
};

export default DataList;
