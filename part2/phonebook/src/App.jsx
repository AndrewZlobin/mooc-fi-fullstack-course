import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-0123456789'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNewName = (event) => {
        setNewName(event.target.value);
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value);
    }


    const addNewPerson = (event) => {
        event.preventDefault();

        const isAlreadyAddedToPhonebook = persons.some(person => person.name === newName);
        if (isAlreadyAddedToPhonebook) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        setPersons([
            ...persons,
            {name: newName, number: newNumber},
        ]);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNewPerson}>
                <div>
                    name: <input onChange={handleNewName}/>
                </div>
                <div>
                    number: <input onChange={handleNewNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => (
                <p key={person.name}>{person.name} {person.number}</p>
            ))}
        </div>
    )
}

export default App