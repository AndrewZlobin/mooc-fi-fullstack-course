import personsService from "../services/persons.js"
import {useState} from "react";

const Persons = ({filter, persons}) => {
    const [removedIds, setRemovedIds] = useState([]);

    const filteredList = persons.filter(person => {
        // Do not show removed Persons
        if (removedIds.length > 0 && removedIds.includes(person.id)) {
            return false
        }
        // Show only filtered (if filter was provided)
        if (filter.length > 0) {
            return person.name.toLowerCase().includes(filter.toLowerCase())
        }

        return true;
    });

    const removeFromPhonebook = (id) => {
        if (!id) {
            return
        }

        const confirmationFromUser = window.confirm("Are you sure you want to delete this person?")
        if (!confirmationFromUser) {
            return
        }

        personsService.remove(id).then(() => {
            setRemovedIds([
                ...removedIds,
                id,
            ])
        })
    }

    return (
        <div>
            {filteredList.map(person => (
                <p key={person.name}>
                    <span>{person.name} {person.number}</span>
                    <button onClick={() => removeFromPhonebook(person.id)}>delete</button>
                </p>
            ))}
        </div>
    )
}

export default Persons