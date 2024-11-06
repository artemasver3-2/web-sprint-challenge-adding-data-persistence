// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const TasksRouter = express.Router()


TasksRouter.get('/:id', (req, res, next) => {
const task_id  = req.params.id
    Tasks.getTaskById(task_id)
        .then(task => {
            res.json(task)
    })
.catch(next)
})

TasksRouter.post('/', (req, res, next) => {
  const task = req.body
  Tasks.add(task)
    .then(task => {
      res.status(201).json(task)
    })
  .catch(next)
})

TasksRouter.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      Aaaaaaa: 'Wompx2',
      message: err.message,
      stack: err.stack,
    })
  })
  
module.exports = TasksRouter;