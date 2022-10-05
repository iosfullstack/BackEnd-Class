const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        age: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const FriendsModel = mongoose.model(`friend`, friendsSchema)

module.exports = FriendsModel