const fs = require(`fs`)

fs.rm(`./ios`, {recursive:true}, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`done`)
})