import {useEffect, useState} from "react";
import countriesService from "../services/countries.js";
import weatherService from "../services/weather.js";
import CountryWeather from "./CountryWeather.jsx";

const CountryDetails = ({list}) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const total = list?.length || 0;

        if (total === 1) {
            countriesService.search(list.at(0).name.common)
                .then(details => setDetails(details))
                .catch(() => setDetails(null));
        } else {
            setDetails(null);
        }

    }, [list])

    if (details === null) {
        return null
    }

    const {name, capital, languages, area, flag} = details;

    return (
        <div>
            <h3>
                <span>{name.common}</span>
                <span>{flag}</span>
            </h3>
            <div>
                <span>Capital:</span>
                <span>{capital?.at(0) || '-'}</span>
            </div>
            <div>
                <span>Area:</span>
                <span>{area}</span>
            </div>
            <h3>Languages</h3>
            <ul>
                {Object.entries(languages).map(([key, language]) => (
                    <li key={key}>{language}</li>
                ))}
            </ul>
            <CountryWeather details={details}/>
        </div>
    )
}

export default CountryDetails