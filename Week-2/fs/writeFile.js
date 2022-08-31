const fs = require(`fs`)

const data = "I am an Operating System"

// Synchronous
fs.writeFileSync(`./linux/index.txt`, data, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`done`)
})

// Asynchronous
let data1 = `Something else`

fs.writeFile(`./linux/text.txt`, data1, error => {
    try {
        if (error) {
            console.log(error)
        }
        console.log(`successful`)
    } catch (error) {
        console.log(error)
    }
})