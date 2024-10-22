import React from 'react';
import './Card.css';

const Card = ({ name, price, description, imgs, stock, newCollection }) => {
    // Selección de la imagen del producto según el stock
    const imageProduct = stock < 45 ? `assets/images/${imgs.imgProduct}` :
        `assets/images/${imgs.imgSoldOut}`;

    const showCollection = () => {
        return (newCollection) ?
            (<span className='new'>
                <img className='star' src={'assets/images/star.png'} alt="" />
                New
            </span>) : ''
    }
    return (
        <article className="card">
            <section className="card-container-img">
                {showCollection()}
                <img
                    className="img-product"
                    src={imageProduct}
                    alt={name}
                    onError={(e) => { e.target.src = 'assets/images/default.png'; }} // Imagen por defecto si falla
                />
            </section>
            <section>
                <h2>{name}</h2>
                <h2>
                    {price}€
                    {/* Mostrar el descuento si el precio es menor a 200 */}
                    {price < 200 && (
                        <span style={{ marginLeft: '10px', color: 'red' }}>30% off</span>
                    )}
                </h2>
                <h3>{description}</h3>
            </section>
        </article>
    );
}

export default Card;
