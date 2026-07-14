import {useState} from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

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