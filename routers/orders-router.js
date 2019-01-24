const ordersRouter = require('express').Router()
const orders = require('../helper/orders-mock-data.json')

ordersRouter.get('/', (req, res) => {
  res.json(orders)
})

ordersRouter.post('/', (req, res) => {
  const order = req.body
  orders.push(order)
  res.json(order)
})

ordersRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const order = orders.filter((o) => o.id === id)
  res.json(order)
})

ordersRouter.patch('/:id', (req, res) => {
  const newData = req.body
  const id = parseInt(req.params.id)
  const orderIndex = orders.findIndex((u) => u.id === id )
  const order = Object.assign(orders[orderIndex], newData)
  res.json(order)
})

module.exports = ordersRouter
