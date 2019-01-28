const authRouter = require('express').Router()
const users = require('../helper/users-data.json')

authRouter.post('/', (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username && u.password === password)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(401)
  }
})

module.exports = authRouter