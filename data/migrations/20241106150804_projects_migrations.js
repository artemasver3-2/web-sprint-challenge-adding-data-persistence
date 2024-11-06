/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
  .createTable('projects', (table) => {
    table.increments('project_id')
    table.string('project_name', 128).notNullable()
    table.string('project_description', 128) 
    table.integer('project_completed', 256).defaultTo(0)
  })
  .createTable('resources', (table) => {
    table.increments('resource_id')
    table.string('resource_name', 128).unique().notNullable()
    table.string('resource_description', 128)
  })
  .createTable('tasks', (table) => {
    table.increments('task_id');
    table.string('task_description', 128).notNullable();
    table.string('task_notes', 128)
    table.integer('task_completed', 256).defaultTo(0)
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('resource_assignments', (table) => {
    table.increments('resource_assignments_id', 128).notNullable();
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('resources_assignments')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
