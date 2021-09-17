const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const User = require('../models/teacher')

const createTeacher = async(username, name) => {
    const link = nanoid(6)
    try {
        let newUser = new User({ username, link, name, clicks: 0 })
        let user = await newUser.save()
        return { status: true, message: user.link }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

const getAllTeachers = async() => {
    try {
        let allUsers = await User.find({})
        return { status: true, message: allUsers }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = {
    createTeacher,
    getAllTeachers
}