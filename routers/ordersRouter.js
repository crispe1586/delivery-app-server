const ordersRouter = require('express').Router()
const helpers = require('../helper')
const orders = require('../helper/orders-data.json')

ordersRouter.get('/', (req, res) => {
  res.json(orders)
})

ordersRouter.put('/', (req, res) => {
  const order = req.body
  const orderIndex = orders.findIndex((o) => o.id === order.id )
  if(orderIndex !== -1) {
    orders[orderIndex] =  order
  } else {
    orders.push(order)
  }
  helpers.saveDataToFile(orders,
    './helper/orders-data.json',
    () => {
      res.json(order)
    }
  )
})

ordersRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const order = orders.filter((o) => o.id === id)
  res.json(order)
})

ordersRouter.patch('/:id', (req, res) => {
  const newData = req.body
  const id = parseInt(req.params.id)
  const orderIndex = orders.findIndex((u) => u.id === id)
  const order = Object.assign(orders[orderIndex], newData)
  helpers.saveDataToFile(orders, './helper/orders-data.json', () => {
    res.json(order)
  })
})

module.exports = ordersRouter
