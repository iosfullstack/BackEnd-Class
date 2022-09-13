const express = require(`express`)
const data = require(`./data`)

const app = express()

app.get(`/`, (req, res) => {
    res.status(200).send(`HOME`)
})
app.get(`/data`, (req, res) => {
    res.status(200).send(data)
})


app.listen(50000, () => {
    console.log(`Server Running`)
})