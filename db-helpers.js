const db = require('./db-config')

module.exports = {
    addProject,
    getProjects,
    addResources,
    getResources,
    addTask,
    getTasks
}

function addProject(project){
    return db('projects')
    .insert(project)
}

function getProjects(){
    return db('projects')
}

function addResources(resource){
    return db('resources')
    .insert(resource)
}

function getResources(){
    return db('resources')
}

function addTask(task){
    return db('tasks')
    .insert(task)
}

function getTasks(){
    return db('tasks')
}