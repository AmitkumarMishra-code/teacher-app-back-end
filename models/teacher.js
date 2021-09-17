const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
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
        required:true,
    },
    subject:{
        type:String,
        required : true,
    }
}, { timestamps: true })

const TeacherModel = mongoose.model('Teacher', TeacherSchema)
module.exports = TeacherModel