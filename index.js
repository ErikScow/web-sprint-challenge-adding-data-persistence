const express = require('express')

const projectsRouter = require('./projects/projectsRouter')
const resourcesRouter = require('./resources/resourcesRouter')
const tasksRouter = require('./tasks/tasksRouter')

const db = require('./db-helpers')

const server = express()

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})