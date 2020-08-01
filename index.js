const express = require('express')
const db = require('./db-helpers')

const server = express()

server.use(express.json())

server.post('/api/projects', (req, res) => {
    if (!req.body || !req.body.name){
        res.status(400).json({message: 'please name your project'})
    } else if (!req.body.status){
        req.body.status = false
        db.addProject(req.body)
        .then(x => {
            res.status(201).json({message: 'project created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not post to database'})
        })
    } else {
        db.addProject(req.body)
        .then(x => {
            res.status(201).json({message: 'project created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not post to database'})
        })
    }
    
})

server.get('/api/projects', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
})

server.post('/api/resources', (req, res) => {
    
})

server.get('/api/resources', (req, res) => {

})

server.post('/api/tasks', (req, res) => {

})

server.get('/api/tasks', (req, res) => {
    
})

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})