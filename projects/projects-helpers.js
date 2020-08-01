const db = require('../db-config')

module.exports = {
    add,
    get,
    getProjectResources
}

function add(project){
    return db('projects')
    .insert(project)
}

function get(){
    return db('projects')
}

function getProjectResources(id){
    return db('projects as p')
        .join('intemediary as i', 'p.id', 'i.project_id')
        .join('resources as r', 'i.resource_id', 'r.id')
        .where('p.id', '=', id)
        .select('p.name', 'r.name')
}