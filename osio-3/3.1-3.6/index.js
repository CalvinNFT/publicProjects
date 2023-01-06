const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-1234567",
    },
    {
      id: 2,
      name: "Calvin Klein",
      number: "045-867532",
    },
    {
      id: 3,
      name: "Defence forcess",
      number: "0299-472071",
    }
  ]

const date = new Date
let personsTotal = persons.length
console.log('length of array', personsTotal)


app.get('/info', (req, res) => {
    res.send(`<h1>Contactbook has ${personsTotal} people</h1> <br /><br /> <p>${date}</p>`)
})

app.get('/', (req, res) => {
    res.send(`<h1>Looking for someone? Check info</h1>`)
})

app.get('/api/persons/:id', (req, res) => {
  let id = Number(req.params.id)
  let person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.delete('/api/persons/:id', (req,res) => {
  const id = Number(req.params.id)

  console.log('person deleted');
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

const generateId = () => Number(Math.floor(Math.random() * 9000))

app.post('/api/persons', (req, res) => {
  const body = req.body

  console.log('_______REQUEST BODY:', req.body);

  if (!body.number) 
  { return res.status(409).json({error: "content missing"})} 

  const person = {
    name: body.name || "No name saved",
    number: body.number,
    id: generateId()
  }
  
 persons = persons.concat(person)
  

 res.json(person)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})