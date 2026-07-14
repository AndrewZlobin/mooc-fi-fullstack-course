const Persons = ({filter, persons}) => {
    const filteredList = filter.length === 0
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            {filteredList.map(person => (<p key={person.name}>{person.name} {person.number}</p>))}
        </div>
    )
}

export default Persons