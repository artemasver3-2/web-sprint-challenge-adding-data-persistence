// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const ProjectsRouter = express.Router()


ProjectsRouter.get('/', (req, res, next) => { 
  Projects.getProjects()
  .then((projects) => {
    res.json(projects)
  })
  .catch(next)
})

ProjectsRouter.get('/:id', (req, res, next) => {
  const project_id  = req.params.id
  Projects.getProjectById(project_id)
      .then(project => {
        res.json(project)
  })
  .catch(next)
})

ProjectsRouter.post('/', (req, res, next) => {
  const project = req.body
  Projects.add(project)
    .then(project => {
      res.status(201).json(project)
    })
  .catch(next)
})


module.exports = ProjectsRouter;