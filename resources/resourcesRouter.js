const express = require('express')
const resources = require('./resources-helpers')

const router = express.Router()

router.post('/', (req, res) => {
    if (!req.body || !req.body.name){
        res.status(400).json({message: 'please name your resource'})
    } else {
        resources.add(req.body)
        .then(x => {
            res.status(201).json({message: 'resource created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not post to database'})
        })
    }
})

router.get('/', (req, res) => {
    resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not get data from database'})
        })
})

module.exports = router