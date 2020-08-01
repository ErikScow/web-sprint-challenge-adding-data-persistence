const db = require('../db-config')

module.exports = {
    add,
    get
}

function add(resource){
    return db('resources')
    .insert(resource)
}

function get(){
    return db('resources')
}