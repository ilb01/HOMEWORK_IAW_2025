import React from 'react'
import './Article.css';

const Article = ({id, title, img, desc}) => {
    return (
        <article key={id} className="entrada">
            <h2>{title}</h2>
            <p>
                <img src={img} alt={title}/>  
                {desc}    
            </p>
            <a href="#" className="boton">Leer Más</a>
        </article>
    )
}

export default Article