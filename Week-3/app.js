const http = require(`http`)
const fs = require(`fs`)

const server = http.createServer((req, res) => {
const data = fs.readFileSync(`./assets/index.txt`, `utf-8`)
res.end(data)
})

server.listen(5001, () => {
    console.log(`Server Launched Now`)
})