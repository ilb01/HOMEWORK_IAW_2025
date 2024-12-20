import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Card() {
    const [characters, setCharacters] = useState([]);

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        axios.get('/data/characters.json')
            .then(response => {
                setCharacters(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }, []);

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.planet.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const orderFilter = (e) => {
        const order = e.target.value;
        if (order === 'N') {
            const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));
            setCharacters(sortedCharacters);
        } else if (order === 'P') {
            const sortedCharacters = [...characters].sort((a, b) => a.power - b.power);
            setCharacters(sortedCharacters);
        }
    }
    
    // function changeView(number){
    //     view === 4 ? setView(6) : setView(4);
    //     const iconGrid = document.getElementsByClassName("grid-characters");
    //     if (number === 4) {
    //         iconGrid.classList.replace("grid-6", "grid-4");
    //     } else if (number === 6) {
    //         iconGrid.classList.replace("grid-4", "grid-6");
    //     }
    // }
    const DarkTheme = () => {
        const viewMode = document.getElementById("view-mode");
        if (viewMode.classList.contains("fa-moon")) {
            viewMode.classList.replace("fa-moon", "fa-sun");
            document.body.classList.add("dark");
        } else {
            viewMode.classList.replace("fa-sun", "fa-moon");
            document.body.classList.remove("dark");
        }
    }

    if (loading) return <p>Loading characters...</p>;
    return (
        <main>
            <div className="filter">
                <div>
                    <input id="textSearch" type="text" placeholder="Search by name or planet" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button id="btnFiltrar">Filter</button>
                </div>
                <div className="options">
                    <svg className="icon-filter" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                    </svg>
                    <select name="order" id="orderFilter" onChange={orderFilter}>
                        <option value={-1}>-</option>
                        <option value="N">By Name (A-Z)</option>
                        <option value="P">By Power Level</option>
                    </select>
                    <svg onclick="changeView(4)" className="icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M192 176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V176zM192 432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144C170.5 288 192 309.5 192 336V432zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM448 432C448 458.5 426.5 480 400 480H304C277.5 480 256 458.5 256 432V336C256 309.5 277.5 288 304 288H400C426.5 288 448 309.5 448 336V432z" className /></svg>
                    <svg onclick="changeView(6)" className="icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232zM128 440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440zM160 72C160 49.91 177.9 32 200 32H248C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM448 120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120zM320 232C320 209.9 337.9 192 360 192H408C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z" /></svg>
                    <i id="view-mode" className="fa-solid fa-sun" onClick={DarkTheme} />
                </div>
            </div>

            <div>
                <h1 style={{ "text-align": "center" }}>Characters</h1>
                <section id="grid-characters" className="grid-6" >
                    {filteredCharacters.map((character, index) => (
                        <article key={index}>
                            <img src={"/img/" + character.image} alt='{character.name}' />
                            <h3>Name: {character.name}</h3>
                            <h4>Planet: {character.planet}</h4>
                            <h4>Power: {character.power}</h4>
                            <button onclick="handleDialog(0)">View details</button>
                        </article>
                    ))}
                    {filteredCharacters.length === 0 && (
                        <p>No characters found.</p>
                    )}
                </section>
            </div>
        </main>
    )
}
