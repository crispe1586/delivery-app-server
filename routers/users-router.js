const usersRouter = require('express').Router()
const users = require('../helper/users-mock-data.json')

usersRouter.get('/', (req, res) => {
  res.json(users)
})

usersRouter.post('/', (req, res) => {
  const user = req.body
  users.push(user)
  res.json(user)
})

usersRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.filter((u) => u.id === id)
  res.json(user)
})

usersRouter.patch('/:id', (req, res) => {
  const newData = req.body
  const id = parseInt(req.params.id)
  const userIndex = users.findIndex((u) => u.id === id )
  const user = Object.assign(users[userIndex], newData)
  res.json(user)
})

module.exports = usersRouter
