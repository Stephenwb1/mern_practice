const express = require('express')
const Job = require('../models/Job')

const router = express.Router()

//GET all jobs
router.get('/', async (req, res) => {
    try {
        const data = await Job.find({})//fetch all documents //Job is using our schema in the jobSchema file
        res.json(data)
    } catch (err) {
        console.error('Error fetching data: ', err)
        res.status(500).send('Internal server error')
    }
})

//GET one job
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)
        if (!job)  {
            return res.status(404).send('Job not found')
        }
        res.json(job)
    } catch (err) {
        console.log('Error fetching job: ', err)
        res.status(500).send('Internal server error')
    }
})

//POST a new job
router.post('/', async (req, res) => {
    try {
        const job = new Job({
            company: req.body.company,
            title: req.body.title,
            link: req.body.link
        })
        const savedJob = await job.save()
        res.status(201).json(savedJob)
    } catch (err){
        console.log('Error posting job: ', err)
        res.status(500).send('Internal server error')
    }
})

//DELETE a job
router.delete('/:id', async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id)
        if(!deletedJob) {
            return res.status(404).send('Job not found')
        }
        res.json({message: 'Job deleted successfully', job: deletedJob})
    } catch (err) {
        console.log('Error deleting job: ', err)
        res.status(500).send('Internal server error')
    }
})

//UPDATE a job
router.patch('/:id', async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            {
                company: req.body.company,
                title: req.body.title,
                link: req.body.link
            },
            {new: true}
        )
        if (!updatedJob) return res.status(404).send('Job not found')
        res.json(updatedJob)
    } catch (err) {
        console.log('Error updating job: ', err)
        res.status(500).send('Internal server error')
    }
})

module.exports = router