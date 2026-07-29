import personsService from "../services/persons.js"

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const addNewPerson = (event) => {
        event.preventDefault()

        const isAlreadyAddedToPhonebook = persons.some(person => person.name === newName)
        if (isAlreadyAddedToPhonebook) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const newPerson = {
            name: newName,
            number: newNumber,
        }

        personsService.add(newPerson)

        setPersons([
            ...persons,
            newPerson,
        ])
    }

    return (
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
    )
}

export default PersonForm;