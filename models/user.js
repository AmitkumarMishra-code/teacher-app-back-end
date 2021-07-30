const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    link: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    clicks: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel