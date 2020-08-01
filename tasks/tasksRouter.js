const express = require('express')
const tasks = require('./tasks-helpers')

const router = express.Router()

router.post('/', (req, res) => {
    if(!req.body || !req.body.description || !req.body.project_id){
        res.status(400).json({message: "please include description and project_id in your request body"})
    } else if (!req.body.status){
        req.body.status = false
        tasks.add(req.body)
            .then(x => {
                res.status(201).json({message: 'task created'})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: 'could not post to database'})
            })
    } else {
        tasks.add(req.body)
            .then(x => {
                res.status(201).json({message: 'task created'})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: 'could not post to database'})
            })
    }
})

router.get('/', (req, res) => {
    tasks.get()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not get data from database'})
        })
})

module.exports = router