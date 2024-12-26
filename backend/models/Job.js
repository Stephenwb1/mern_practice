const mongoose = require('mongoose')

//Job Schema
const jobSchema = new mongoose.Schema({
    company: String,
    title: String,
    link: String
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job