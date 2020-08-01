const express = require('express')

const server = express()

server.use(express.json())

server.post('/api/projects', (req, res) => {

})

server.get('/api/projects', (req, res) => {

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