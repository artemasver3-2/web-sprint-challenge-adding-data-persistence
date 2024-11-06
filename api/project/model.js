// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjectById(project_id) {
    const row = await db('projects').where('project_id', project_id).first()

    const result = [{
        project_name: row.project_name, 
        project_description: row.project_description, 
        project_id: row.project_id, 
        project_completed: row.project_completed === 1 ? 'true' : 'false'
    }]

    return result 
}

async function add(project) {
    const row = await db('projects').insert(project)
    .then(([id]) => {
     return db('projects').where('project_id', id).first()
    })

    const result = [{
      project_name: row.project_name, 
      project_description: row.project_description, 
      project_id: row.project_id, 
      project_completed: row.project_completed === 1 ? 'true' : 'false'
    }]

  return result 
  }

  
module.exports = {
    getProjectById,
    add,
};