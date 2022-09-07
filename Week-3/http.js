const http = require(`http`)
// console.log(http)

// Creating a Server

const server = http.createServer((req, res) => {
    // HomePage
    // About Us
    // Contact Us
    // Error Page
    // res.write(`Hello from server`)
    console.log(req.url)
    // res.end(`Hello from the server`)
    if (req.url === '/') {
        res.end(`HomePage`)
    } else if (req.url === '/about') {
        res.end(`About Us Page`)
    } else if (req.url === '/contact') {
        res.end(`Contact Us Page`)
    } else {
        res.end(`404 Page Not found`)
    }
})
server.listen(5000, () => {
    console.log(`server is running on port 5000`)
})