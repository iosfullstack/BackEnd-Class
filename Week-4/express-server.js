const express = require(`express`)

const app = express()

app.get(`/`, (req, res) => {
    res.status(200).send(`HOME`)
})
app.get(`/about`, (req, res) => {
    res.status(200).send(`About Page`)
})
app.get(`/contact`, (req, res) => {
    res.status(200).send(`contact Page`)
})
app.get(`*`, (req, res) => {
    res.status(404).send(`Page Not Found`)
})

app.listen(50000, () => {
    console.log(`Server Running`)
})