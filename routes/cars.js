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
    res.status(500).json({ message: 'Failed to retrive cars'})
  })
});


module.exports = router