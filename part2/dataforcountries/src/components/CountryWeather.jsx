import {useEffect, useState} from "react";
import weatherService from "../services/weather.js";

const CountryWeather = ({details}) => {
    const [weather, setWeather] = useState(null);
    const [iconCode, setIconCode] = useState(null);

    useEffect(() => {
        if (details == null) {
            setWeather(null)
        } else {
            const [lat, lon] = details.capitalInfo.latlng

            weatherService.getWeatherByCoordinates(lat, lon)
                .then(weather => setWeather(weather))
                .catch(() => setWeather(null))
        }
    }, [details])

    useEffect(() => {
        if (weather === null) {
            setIconCode(null)
        } else {
            setIconCode(weather.weather.at(0).icon)
        }
    }, [weather])

    if (details === null || weather === null || iconCode === null) {
        return null;
    }

    return (
        <div>
            <h3>Weather in {details.name.common}</h3>
            <div>Temperature: {weather.main.temp} Celsius</div>
            <img src={`https://openweathermap.org/payload/api/media/file/${iconCode}.png`} alt={weather.name}/>
            <div>Wind: {weather.wind.speed} m/s</div>
        </div>
    )
}

export default CountryWeather