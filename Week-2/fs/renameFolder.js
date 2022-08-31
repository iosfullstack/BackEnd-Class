const fs = require(`fs`)

fs.rename(`./ios`, `./linux`, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`done`)
})