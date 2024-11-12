import { useState } from "react";

export default function Footer() {
    const initialState = {
        save: false,
        like: false,
        likes: 121,
    };

    const [state, setState] = useState(initialState);

    // CORAZON
    const liked = state.like ? "corazon_active" : "corazon";
    const saved = state.save ? "guardar_active" : "guardar";

    function changeLike() {
        setState((prevState) => ({
            ...prevState,
            like: !prevState.like,
            likes: prevState.like ? prevState.likes - 1 : prevState.likes + 1,
        }));
    }

    function changeSave() {
        setState((prevState) => ({
            ...prevState,
            save: !prevState.save,
        }));
    }

    return (
        <div className="footer">
            <div className="footer-icons">
                <span className={liked} id="corazon" onClick={changeLike}></span>
                <span className="burbuja" id="b1"></span>
                <span className="enviar" id="e1"></span>
                <div className="guardar-icon-container">
                    <span className={saved} id="guardar" onClick={changeSave}></span>
                </div>
            </div>
            <div className="caption-container">
                <h4>
                    <span>{state.likes}</span> Likes
                </h4>
                <div className="caption">
                    <h4>Pedro_Terminator</h4>
                    <span>Hola Estoy muy feliz!!! aprendiendo React JS. Mira mi gato.</span>
                </div>
            </div>
        </div>
    );
}
