/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", function (projects) {
      projects.increments("project_id");
      projects.string("project_name", 128).notNullable();
      projects.text("project_description");
      projects.boolean("project_completed").notNullable().defaultTo(0);
    })
    .createTable("resources", function (resources) {
      resources.increments("resource_id");
      resources.string("resource_name", 128).unique().notNullable();
      resources.text("resource_description");
    })
    .createTable("tasks", function (tasks) {
      tasks.increments("task_id");
      tasks.string("task_description", 128).notNullable();
      tasks.text("task_notes");
      tasks.boolean("task_completed").notNullable().defaultTo(0);
      tasks
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("project_resources", function (pr) {
      pr.increments();
      pr.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      pr.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
  