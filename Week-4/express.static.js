const express = require(`express`)
const path = require(`path`)

const app = express()
app.use(express.static(`./myFile`))

// app.get(`/`, (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, `./myFile/index.html`))
// })


app.listen(50000, () => {
    console.log(`Server Running`)
})