const mongoose = require('mongoose');
const dotenv = require(`dotenv`)
dotenv.config()

const connectionString = process.env.CONNECTION_STRING

const connectDb = async () => {
    await mongoose.connect(connectionString)
    console.log(`Connected to database`)
}   

module.exports = connectDb

// mongodb://localhost:27017
// mongodb+srv://iosdev:Mobile199@cluster0.fckq4zo.mongodb.net