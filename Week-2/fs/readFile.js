const fs = require(`fs`)

// Synchronous
try {
    const data = fs.readFileSync(`./linux/index.txt`, `utf-8`)
    console.log(data)
    
} catch (error) {
    console.log(error)
}

// Asynchronous
fs.readFile(`./linux/text.txt`, `utf-8`, (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data)
})