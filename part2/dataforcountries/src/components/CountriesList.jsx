const CountriesList = ({list, setSearch}) => {
    if (list === null || list.length > 10 || list.length <= 1) {
        return null;
    }

    return (
        <ul>
            {list.map(country => (
                <li key={country.name.official}>
                    <span>{country.name.common}</span>
                    <button onClick={() => setSearch(country.name.common)}>Show</button>
                </li>
            ))}
        </ul>
    )
}

export default CountriesList