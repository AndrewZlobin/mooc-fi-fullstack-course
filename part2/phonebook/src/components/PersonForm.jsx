import personsService from "../services/persons.js"
import {useState} from "react";
import Notification from "./Notification.jsx";

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {

    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);

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

                personsService.update(updatedPerson)
                    .then(data => {
                        setPersons(
                            persons.map(person => person.name === data.name ? data : person)
                        )

                        setMessage(`${newName} was changed successfully.`)
                        setMessageType('success')
                        setTimeout(() => {
                            setMessage(null)
                            setMessageType(null)
                        }, 5000);
                    })
                    .catch(() => {
                        setMessage(`Information of ${newName} has already been removed from server.`)
                        setMessageType('error')
                        setTimeout(() => {
                            setMessage(null)
                            setMessageType(null)
                        }, 5000);
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

        setMessage(`${newName} added to phonebook`)
        setMessageType('success');
        setTimeout(() => {
            setMessage(null)
            setMessageType(null)
        }, 5000);
    }

    return (
        <div>
            <Notification message={message} type={messageType} />
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
        </div>
    )
}

export default PersonForm;