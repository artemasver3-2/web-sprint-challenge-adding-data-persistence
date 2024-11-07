// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks as t')
  .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      'p.project_id',
      'p.project_name', 
      'p.project_description',
      't.task_description',
      't.task_completed',
      't.task_notes'
    )
    .then((task) =>
      task.map((task) => ({
        ...task,
        task_completed: task.task_completed === 1 ? true : false,
      }))
    );
}

async function getTaskById(task_id) {
  const row = await db('tasks as t')
    .where('task_id', task_id)
    .leftJoin('projects as p', 't.task_id', 'p.project_id')
    .select('p.project_name', 'p.project_description');

  const result = {
    project_name: row[0].project_name,
    project_description: row[0].project_description,
    task_id: row[0].task_id,
    task_description: row[0].task_description,
    task_notes: row[0].task_notes,
    task_completed: row[0].task_completed === 1 ? true : false,
  };
  return result;
}

async function add(task) {
  return db("tasks")
  .insert(task)
  .then((task_id) => db("tasks").where('task_id',  task_id ))
  .then((task) =>
    task.map((t) => ({
      ...t
    }))
  )
}

module.exports = {
  getTasks,
  getTaskById,
  add,
};
