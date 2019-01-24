const express = require('express')
const app = express()
const path = require('path')
const port = 3300
const morgan = require('morgan')
const bodyParser = require('body-parser')
const server = require('http').createServer(app)
const usersRouter = require('./routers/users-router')
const ordersRouter = require('./routers/orders-router')

app.use(morgan('dev'))

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))

// Public folder Configuration
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)
app.use('/orders', ordersRouter)

server.listen(port, () => {
  console.log('Server running in port ', port)
})
