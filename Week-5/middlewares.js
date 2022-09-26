// const express = require(`express`)

// const app = express()

// custom middleware
const sayHi = (req, res, next) => {
    const name = `try`

    console.log(`Hi ${name}`)

    next()
}

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

const handleError = (err, req, res, next) => {
    console.log(err)
}



module.exports = {sayHi, logger, handleError}