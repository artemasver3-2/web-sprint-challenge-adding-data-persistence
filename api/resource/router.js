// build your `/api/resources` router here
// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const ResourcesRouter = express.Router()


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

ResourcesRouter.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      Aaaaaaa: 'Wompx2',
      message: err.message,
      stack: err.stack,
    })
  })
  
module.exports = ResourcesRouter;