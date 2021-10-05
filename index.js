require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const { createTeacher, getAllTeachers } = require('./controllers/teacherController')
const { getProducts, getInventory } = require('./controllers/sellbriteController')
const { getList, getRezdyProduct } = require('./controllers/rezdyController')

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
    let { username, name, subject } = req.body
    let response = await createTeacher(username, name, subject)
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/admin', async(req, res) => {
    let response = await getAllTeachers()
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/products', async(req, res) => {
    let response = await getProducts()
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/inventory', async(req, res) => {
    let response = await getInventory()
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/rezdy-list', async(req, res) => {
    let response = await getList()
    if (response.status) {
        res.status(200).json({ message: response.message })
    } else {
        res.status(400).json({ message: response.message })
    }
})

app.get('/rezdy-product/:id', async(req, res) => {
    let response = await getRezdyProduct(req.params.id)
    if (response.status) {
        res.status(200).json({ message: response.message })
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