import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { seriesList } from './data/series-static';

const Netflix = ({ id, title, img, year, pegi, matching, seasons, stars, desc, type, episodes }) => {
    // Función para mostrar temporadas o episodios
    const verTemporadas = () =>
        type === "miniserie" ? type :
            seasons ? `${seasons} temporada${seasons > 1 ? 's' : ''}` :
                episodes ? `${episodes} episodio${episodes > 1 ? 's' : ''}` :
                    "undefined";

    return (
        <article className="card" key={id}>
            <div className="season">{verTemporadas()}</div>
            <img src={`./img/${img}`} alt={title} />
            <div className="container">
                {matching > 60 && (
                    <div className="coincidencia">{matching}% de coincidencia</div>
                )}
                <div className="info-card-container">
                    <div>
                        <span className={`pegi age-${pegi}`}>{pegi}+</span>
                        <span className="year">{year}</span>
                    </div>
                    <div className="tooltip">
                        <div className="tooltiptext">Añadir</div>
                        <MdAddCircle color="white" size="24" />
                    </div>
                </div>

                {/* ESTRELLAS */}
                {stars > -1 &&
                    <div className="score">
                        <div className={(stars > 0) ? "star" : "star-off"}></div>
                        <div className={(stars > 1) ? "star" : "star-off"}></div>
                        <div className={(stars > 2) ? "star" : "star-off"}></div>
                        <div className={(stars > 3) ? "star" : "star-off"}></div>
                        <div className={(stars > 4) ? "star" : "star-off"}></div>
                    </div>}

                <p>{desc}</p>
            </div>
        </article>
    );
};

// Componente principal que mapeará la lista de series
const NetflixList = () => {
    return (
        <div className="grid-similares">
            {seriesList.map(serie => (
                <Netflix
                    key={serie.id}
                    id={serie.id}
                    title={serie.title}
                    img={serie.img}
                    year={serie.year}
                    pegi={serie.pegi}
                    matching={serie.matching}
                    stars={serie.stars}
                    seasons={serie.seasons}
                    desc={serie.desc}
                    type={serie.type}
                    episodes={serie.episodes}
                />
            ))}
        </div>
    );
};

export default NetflixList;
