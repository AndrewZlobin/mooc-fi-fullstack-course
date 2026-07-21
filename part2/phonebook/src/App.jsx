import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3001/persons`)
            .then(resp => setPersons(resp.data));
    }, []);

    const [filter, setFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const filteredList = filter.length === 0
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setFilter={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm
                persons={persons} setPersons={setPersons}
                newName={newName} setNewName={setNewName}
                newNumber={newNumber} setNewNumber={setNewNumber} />
            <h2>Numbers</h2>
            <Persons filter={filter} persons={persons}/>
        </div>
    )
}

export default App