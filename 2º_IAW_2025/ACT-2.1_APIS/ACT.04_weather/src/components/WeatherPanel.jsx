<<<<<<< HEAD
import { useState } from "react"
import Form from "./Form"
import Card from "./Card"

export default function WeatherPanel() {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
=======
import useState from "react"
import Form from "./Form"
import Card from "./Card"

export default function WeatherPanel(){    
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);

    const appid = "000129725b683e58d194bb09dc763dd9";
<<<<<<< HEAD
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&lang=en`;
    let cityUrl = "&q=";

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&lang=en`;

    const getLocation = async (loc) => {
=======
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&lang=es`;
    let cityUrl = "&q=";
    
    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&lang=es`;

    const getLocation = async(loc) => {
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
        setLoading(true);

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then(res => {
<<<<<<< HEAD
            if (!res.ok) throw { res }
            return res.json();
        }).then(data => {
            console.log(data);
            setWeather(data);
        }).catch(error => {
=======
            if(!res.ok) throw {res}
            return res.json();
        }).then(data => {
            setWeather(data);
        }).catch(error =>{
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
            console.error(error);
            setLoading(false);
            setShow(false);
        })

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then(res => {
<<<<<<< HEAD
            if (!res.ok) throw { res }
            return res.json();
        }).then(data => {
            console.log(data);
            setForecast(data);
            setLoading(false);
            setShow(true);
        }).catch(error => {
=======
            if(!res.ok) throw {res}
            return res.json();
        }).then(data => {
            setForecast(data);
            setLoading(false);
            setShow(true);
        }).catch(error =>{
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
            console.error(error);
            setLoading(false);
            setShow(false);
        })
    }

<<<<<<< HEAD
    return (
        <>
            <Form getLocation={getLocation} />
            <Card show={show} loading={loading} weather={weather} forecast={forecast} />
=======
    return(
        <>
            <Form newLocation={getLocation}/>
            <Card show={show} loading={loading} weather={weather} forecast={forecast}/>
>>>>>>> 213392e21f81c3a09e1daf3ba48e46cf7ab43f66
        </>
    )
}