// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResourcesById(resource_id) {
    return db('resources').where('resource_id', resource_id).first()
}

function add(resource) {
    return db('resources').insert(resource)
    .then(([id]) => {
     return db('resources').where('resource_id', id).first()
    })
}

module.exports = {
    getResourcesById,
    add,
};