require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const { createUser, addClick, getAllUsers } = require('./controllers/userController')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Successfully connected to the server!' })
})

app.post('/user', async(req, res) => {
    let { username, name } = req.body
    if (!name) {
        name = 'Anonymous User'
    }
    let response = await createUser(username, name)
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/admin', async(req, res) => {
    let response = await getAllUsers()
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/:id', async(req, res) => {
    let response = await addClick(req.params.id)
    if (response.status) {
        res.redirect(301, "http://www.google.com")
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.all(/.*/, (req, res) => {
    res.status(404).json({ message: 'Invalid endpoint. Please contact the admin.' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})