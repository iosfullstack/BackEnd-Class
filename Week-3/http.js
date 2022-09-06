const http = require(`http`)
// console.log(http)

// Creating a Server

const server = http.createServer((req, res) => {
    res.write(`Hello from server`)
    res.end()
})
server.listen(5000, () => {
    console.log(`server is running on port 5000`)
})