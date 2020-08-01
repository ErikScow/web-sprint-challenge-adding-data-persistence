const db = require('../db-config')

module.exports = {
    add,
    get
}

function add(project){
    return db('projects')
    .insert(project)
}

function get(){
    return db('projects')
}
