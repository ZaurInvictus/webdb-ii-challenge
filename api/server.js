const express = require('express')
const helmet  = require('helmet')


const carsRouter = require('../routes/cars.js')
const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Cars API is up and running</h2>`)
});


module.exports = server
