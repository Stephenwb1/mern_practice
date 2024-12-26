require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const jobRoutes = require('./routes/jobs')

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Connection error:', err))


//use our API endpoints from ../routes/jobs.js
app.use('/api/jobs', jobRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server running on port ', process.env.PORT)
})
