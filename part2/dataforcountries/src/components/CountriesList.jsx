const CountriesList = ({list}) => {
    if (list === null || list.length > 10 || list.length <= 1) {
        return null;
    }

    return (
        <ul>
            {list.map(country => (
                <li key={country.name.official}>{country.name.common}</li>
            ))}
        </ul>
    )
}

export default CountriesList