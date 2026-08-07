import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const appId = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherByCoordinates = (lat, lon) => {
    return axios.get(`${baseUrl}?units=metric&lat=${lat}&lon=${lon}&appid=${appId}`)
        .then(response => response.data)
}

export default {
    getWeatherByCoordinates
}
