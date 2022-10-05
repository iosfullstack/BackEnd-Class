const mongoose = require('mongoose');

const dbUrl = `mongodb+srv://iosdev:Mobile1991@cluster0.fckq4zo.mongodb.net/friends_db?retryWrites=true&w=majority`

const connectDb = async () => {
    await mongoose.connect(dbUrl)
    console.log(`Connected to database`)
}   

module.exports = connectDb