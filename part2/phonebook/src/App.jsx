import {useState, useEffect} from 'react'
import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"
import personsService from "./services/persons.js"

const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        personsService
            .getAll()
            .then(persons => setPersons(persons));
    }, []);

    const [filter, setFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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