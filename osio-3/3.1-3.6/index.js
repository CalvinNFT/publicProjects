console.log("initial, hello world");

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

// app.get('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const note = persons.find(note => note.id === id)

//     if (note) {
//         response.json(note)
//       } else {
//         response.status(404).end()
//       }
//   })

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// app.delete('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     persons = persons.filter(note => note.id !== id)
  
//     response.status(204).end()
//   })

// const generateId = () => {
//     const maxId = persons.length > 0
//       ? Math.max(...persons.map(n => n.id))
//       : 0
//     return maxId + 1
// }
  
// app.post('/api/persons', (request, response) => {
//     const body = request.body
  
//     if (!body.content) {
//       return response.status(400).json({ 
//         error: 'content missing' 
//       })
//     }
  
//     const note = {
//       content: body.content,
//       important: body.important || false,
//       date: new Date(),
//       id: generateId(),
//     }
  
//     persons = persons.concat(note)
  
//     response.json(note)
// })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})