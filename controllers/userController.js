const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const User = require('../models/user')

const createUser = async(username, name) => {
    const link = nanoid(6)
    try {
        let newUser = new User({ username, link, name, clicks: 0 })
        let user = await newUser.save()
        return { status: true, message: user.link }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

const addClick = async(link) => {
    try {
        let updateClick = await User.findOne({ link })
        if (!updateClick) {
            return { status: false, message: 'Invalid Link!' }
        } else {
            updateClick.clicks += 1
            await updateClick.save()
            return { status: true, message: 'Updated Click!' }
        }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

const getAllUsers = async() => {
    try {
        let allUsers = await User.find({})
        return { status: true, message: allUsers }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = {
    createUser,
    addClick,
    getAllUsers
}