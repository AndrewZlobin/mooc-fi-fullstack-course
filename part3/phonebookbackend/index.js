const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const message = `Phonebook has info for ${persons.length + 1} people`;
    const currentDateTime = new Date().toString();

    response.send(`<div><p>${message}</p><p>${currentDateTime}</p></div>`)
})

app.get('/api/persons/:id', (request, response) => {
    const person = persons.find(person => person.id === request.params.id);
    if (!person) {
        response.status(404).end()
    }

    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    persons = persons.filter(person => person.id !== request.params.id);
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    const num = body.number;

    if (!num) {
        response.status(400).json({error: 'Number is required'}).end()
    }

    const name = body.name;

    if (!name) {
        response.status(400).json({error: 'Name is required'}).end()
    }

    const exists = persons.find(person => person.name === name);
    if (!!exists) {
        response.status(400).json({error: `Name ${name} is already exists`}).end()
    }

    const id = Math.round(Math.random() * 1000)

    const person = {
        id: id.toString(),
        name,
        number: num,
    }

    persons = [
        ...persons,
        person,
    ]

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})