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
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not get data from database'})
        })
})

server.post('/api/resources', (req, res) => {
    if (!req.body || !req.body.name){
        res.status(400).json({message: 'please name your resource'})
    } else {
        db.addResources(req.body)
        .then(x => {
            res.status(201).json({message: 'resource created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: 'could not post to database'})
        })
    }
})

server.get('/api/resources', (req, res) => {
    db.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not get data from database'})
        })
})

server.post('/api/tasks', (req, res) => {
    if(!req.body || !req.body.description || !req.body.project_id){
        res.status(400).json({message: "please include description and project_id in your request body"})
    } else if (!req.body.status){
        req.body.status = false
        db.addTask(req.body)
            .then(x => {
                res.status(201).json({message: 'task created'})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: 'could not post to database'})
            })
    } else {
        db.addTask(req.body)
            .then(x => {
                res.status(201).json({message: 'task created'})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({error: 'could not post to database'})
            })
    }
})

server.get('/api/tasks', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not get data from database'})
        })
})

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})