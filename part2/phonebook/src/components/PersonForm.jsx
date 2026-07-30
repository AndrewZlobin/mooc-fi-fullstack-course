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

        const alreadyExistingPerson = persons.find(person => person.name === newName);
        if (!!alreadyExistingPerson) {
            const replaceConfirmation = window.confirm(`${alreadyExistingPerson.name} is already added to phonebook, replace the old number with a new one?`)

            if (replaceConfirmation) {
                const updatedPerson = {
                    ...alreadyExistingPerson,
                    name: newName,
                    number: newNumber,
                }

                personsService.update(updatedPerson).then(data => {
                    setPersons(
                        persons.map(person => person.name === data.name ? data : person)
                    )
                })
            }

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