// build your `/api/resources` router here
// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const ResourcesRouter = express.Router()

ResourcesRouter.get('/', (req, res, next) => { 
  Resources.getResources()
  .then((resources) => {
    res.json(resources)
  })
  .catch(next)
})

ResourcesRouter.get('/:id', (req, res, next) => {
const resource_id  = req.params.id
    Resources.getResourcesById(resource_id)
        .then(resource => {
            res.json(resource)
    })
.catch(next)
})

ResourcesRouter.post('/', (req, res, next) => {
  const resource = req.body
  Resources.add(resource)
    .then(resource => {
      res.status(201).json(resource)
    })
  .catch(next)
})

module.exports = ResourcesRouter;