const usersRouter = require('express').Router()
const helpers = require('../helper')
const users = require('../helper/users-data.json')

usersRouter.get('/', (req, res) => {
  res.json(users)
})

usersRouter.put('/', (req, res) => {
  const user = req.body
  const userIndex = users.findIndex((u) => u.id === user.id )
  if(userIndex !== -1) {
    users[userIndex] =  user
  } else {
    users.push(user)
  }
  helpers.saveDataToFile(users,
    './helper/users-data.json',
    () => {
      res.json(user)
    }
  )
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
  helpers.saveDataToFile(users,
    './helper/users-data.json',
    () => {
      res.json(user)
    }
  )
})

module.exports = usersRouter
