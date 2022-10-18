const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const FriendsModel = mongoose.model(`friend`, friendsSchema)

module.exports = FriendsModel