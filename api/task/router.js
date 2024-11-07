// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const TasksRouter = express.Router()


TasksRouter.get('/', (req, res, next) => { 
  Tasks.getTasks()
  .then((tasks) => {
    res.json(tasks)
  })
  .catch(next)
})

TasksRouter.get('/:id', (req, res, next) => {
const task_id  = req.params.id
    Tasks.getTaskById(task_id)
        .then(task => {
            res.json(task)
    })
.catch(next)
})

TasksRouter.post('/', (req, res, next) => {
  const { task_description, task_notes, task_completed, project_id} = req.body
  if(task_description && project_id) {
     Tasks.add(req.body)
    .then(() => {
      res.status(201).json({
        task_description: task_description, 
        task_notes: task_notes ? task_notes : null,
        task_completed: task_completed  === 1 ? true : false
      })
    })
  .catch(next)
  } else 
    res.status(400).json({
      message: 'Please provide a task description and an id for project.'
    }
  )
})


module.exports = TasksRouter;