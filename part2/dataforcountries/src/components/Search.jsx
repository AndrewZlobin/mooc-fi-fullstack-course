const Search = ({countries, setSearch}) => {
    if (countries === null || countries.length === 0) {
        return null;
    }

    return (
        <div>
            <span>find countries</span>
            <input id="search" onChange={() => setSearch(event.target.value)} />
        </div>
    )
}

export default Search