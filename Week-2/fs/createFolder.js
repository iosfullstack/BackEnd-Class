const fs = require(`fs`)

// Check if folder already exist
// Create a new folder if that folder doesn't exist

try {
    if (!fs.existsSync(`ios`))
    fs.mkdirSync(`ios`)
    console.log(`successful`)
} catch (error) {
    console.log(error)
}