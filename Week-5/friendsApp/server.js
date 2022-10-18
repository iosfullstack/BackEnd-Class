const express = require('express')
const dotenv = require(`dotenv`)
dotenv.config()
const router = require(`./src/router/friendsRouter`)
const {logger, sayHi} = require(`./src/middleware/logger`)
// const sayHi= require(`./src/middleware/sayHi`)
const app = express()
app.use(express.json())
const connectDb = require(`./src/config/config`)
// const { connect } = require(`mongoose`)

//middleware


app.get('/', (req, res) =>{
    res.status(200).send('Homepage')
})

// app.use(`/friends`, router)
app.use(`/data`, router)

const port = process.env.PORT

// connectDb()

app.listen(port, async ()=> {
    await connectDb()
    console.log('Server is up and running')
})