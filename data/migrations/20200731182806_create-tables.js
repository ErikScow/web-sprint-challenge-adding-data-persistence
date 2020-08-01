

exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.text('name')
            .notNullable() 
        tbl.text('description')
        tbl.boolean('status')
            .notNullable()
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.text('name')
            .unique()
            .notNullable()
        tbl.text('description')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.text('description')
            .notNullable()
        tbl.text('notes')
        tbl.boolean('status')
            .notNullable()
        tbl.integer('project_id')
            .notNullable()
    })
    .createTable('intermediary', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('intermediary')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
