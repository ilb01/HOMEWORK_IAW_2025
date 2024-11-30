import { useState, useEffect } from 'react'

export default function App() {
  return (
    <div className="App">
      <nav className="navbar bg-dark text-light mb-5">
        <div className="container-fluid">
          <h3 className="mx-auto">Predicción Meteorológica</h3>
        </div>
      </nav>
      <div className="containet">
        <form>
          <div className="input-group mb-3 mx-auto">
          <input type="text" className="form-control" placeholder="Ciudad" />
          <button className="btn btn-primary input-group-text" type="submit">Search</button></div>
        </form>
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">Palma de Mallorca</h3>
                <p className="card-date">27/11/2024</p>
                <h1 className="card-temp">18.2ºC</h1>
                <p className="card-desc"><img src="http://openweathermap.org/img/w/02n.png" alt="icon" />algo de nubes</p>
                <img src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">Temperatura máxima: 18.5ºC</h5>
                  <h5 className="card-text">Temperatura mínima: 17.9ºC</h5>
                  <h5 className="card-text">sensación térmica: 18.2ºC</h5>
                  <h5 className="card-text">Humedad: 80%</h5>
                  <h5 className="card-text">Velocidad del viento: 2.06m/s</h5>
                </div>
                <hr />
                <div className="row mt-4">
                  <div className="col">
                    <p>27/11/2024 21h</p>
                    <p className="description"><img src="http://openweathermap.org/img/w/01n.png" alt="icon" />cielo claro</p>
                    <p className="temp">14.9ºC</p>
                  </div>
                  <div className="col">
                    <p>28/11/2024 00h</p>
                    <p className="description"><img src="http://openweathermap.org/img/w/01n.png" alt="icon" />cielo claro</p>
                    <p className="temp">12.8ºC</p>
                  </div>
                  <div className="col">
                    <p>28/11/2024 03h</p>
                    <p className="description"><img src="http://openweathermap.org/img/w/01n.png" alt="icon" />cielo claro</p>
                    <p className="temp">12.4ºC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
