const express = require(`express`)
const data = require(`./data`)

const app = express()
app.use(express.json())

app.get(`/`, (req, res) => {
    res.status(200).send(`HOME`)
})

// CRUD - HTTP VERBS
app.get(`/data`, (req, res) => {
    res.status(200).send(data)
})  
// Read Operation

// app.post(`/data`, (req, res) => {
//     console.log(req.body)
//     res.status(200).send(`data`)
// })

app.post(`/data`, (req, res) => {
    const person = req.body
    data.push(person)
    res.status(201).send(data)
})

app.get(`/data/:personId`, (req, res) => {
    const id = req.params.personId
    const onePerson = data.find((person) => person.id == id)
    res.status(200).send(onePerson)
})

app.put(`/data/:personId`, (req, res) => {
    const payload = req.body
    const id = req.params.personId
    const onePerson = data.find((person) => person.id == id)
    onePerson.name = payload.name
    res.status(200).send(onePerson)
})

app.delete(`/data/:personId`, (req, res) => {
    const id = req.params.personId
    const onePerson = data.filter((person) => person.id !== Number(id))
    res.status(200).send(onePerson)
})


app.listen(50000, () => {
    console.log(`Server Running`)
})