const db = require('../db-config')

module.exports = {
    add,
    get
}

function add(task){
    return db('tasks')
    .insert(task)
}

function get(){
    return db('tasks')
}