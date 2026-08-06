import {useEffect, useState} from 'react'
import countriesService from "./services/countries.js";
import Search from "./components/Search.jsx";
import Notification from "./components/Notification.jsx";
import CountriesList from "./components/CountriesList.jsx";
import CountryDetails from "./components/CountryDetails.jsx";

function App() {

  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    countriesService
        .getAll()
        .then(countries => setCountries(countries))
  }, [])

  useEffect(() => {
    const list = countries?.filter(country => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    })

    setList(list || null)
  }, [search]);

  if (countries === null) {
    return null;
  }

  return (
    <div>
      <Search countries={countries} setSearch={setSearch}/>
      <Notification list={list}/>
      <CountriesList list={list}/>
      <CountryDetails list={list}/>
    </div>
  )
}

export default App
