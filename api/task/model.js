// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTaskById(task_id) {
  const row = await db('tasks as t')
    .where('task_id', task_id)
    .leftJoin('projects as p', 't.task_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_completed',
      't.task_notes',
      't.task_description',
      'p.project_name',
      'p.project_description'
    );

  const result = [
    {
      project_name: row[0].project_name,
      project_description: row[0].project_description,
      task_id: row[0].task_id,
      task_description: row[0].task_description,
      task_notes: row[0].task_notes,
      task_completed: row[0].task_completed === 1 ? 'true' : 'false',
    },
  ];

  return result;
}

function add(task) {
  return db('tasks').insert(task)
  .then(([id]) => {
   return db('tasks').where('task_id', id).first()
  })

}

module.exports = {
  getTaskById,
  add,
};
