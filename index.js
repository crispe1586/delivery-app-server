const express = require('express')
const app = express()
const path = require('path')
const port = 3300
const morgan = require('morgan')
const bodyParser = require('body-parser')
const server = require('http').createServer(app)
const usersRouter = require('./routers/usersRouter')
const ordersRouter = require('./routers/ordersRouter')
const authRouter = require('./routers/authRouter')

app.use(morgan('dev'))

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))

// Public folder Configuration
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)
app.use('/orders', ordersRouter)
app.use('/auth', authRouter)

server.listen(port, () => {
  console.log('Server running in port ', port)
})
