const express = require('express')
const projects = require('./projects-helpers')

const router = express.Router()

router.post('/', (req, res) => {
    if (!req.body || !req.body.name){
        res.status(400).json({message: 'please name your project'})
    } else if (!req.body.status){
        req.body.status = false
        projects.add(req.body)
        .then(x => {
            res.status(201).json({message: 'project created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not post to database'})
        })
    } else {
        projects.add(req.body)
        .then(x => {
            res.status(201).json({message: 'project created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not post to database'})
        })
    }
    
})

router.get('/', (req, res) => {
    projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not get data from database'})
        })
})

module.exports = router