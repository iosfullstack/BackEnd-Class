const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(`mongodb+srv://iosdev:Mobile1991@cluster0.fckq4zo.mongodb.net/?retryWrites=true&w=majority`);
    console.log(`Connected to database`)
}   

module.exports = connectDb