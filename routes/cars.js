const express = require('express')
const router = express.Router()
const knex = require('knex')

const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

router.get('/', (req, res) => {
 db('cars')
 .then(cars => {
   res.json(cars)
 })
  .catch(err => {
    res.status(500).json({ message: 'Failed to retrieve cars'})
  })
});


router.post('/', (req, res) => {
  const carsData = req.body

  db('cars').insert(carsData)

  .then(ids => {
    db('cars').where({ id: ids[0] })
    .then(newCarEntry => {
       res.status(201).json(newCarEntry)
    })
  })
    .catch(err => {
      console.log('POST error', err)
      res.status(500).json({ message: 'Failed to store data'})
    })
})


module.exports = router