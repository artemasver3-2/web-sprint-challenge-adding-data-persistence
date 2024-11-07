// build your `Resource` model here
const db = require('../../data/dbConfig');


function getResources() {
    return db('resources')
}
async function getResourcesById(resource_id) {
    return db('resources').where('resource_id', resource_id).first()
}

async function add(resource) {
    const result = await db('resources').insert(resource)
    .then(([id]) => {
     return db('resources').where('resource_id', id).first()
    })

    return result
}

module.exports = {
    getResources,
    getResourcesById,
    add,
};