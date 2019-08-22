const express = require('express')
const router = express.Router()
const knex = require('knex')

const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)


// GET
router.get('/', (req, res) => {
 db('cars')
 .then(cars => {
   res.json(cars)
 })
  .catch(err => {
    res.status(500).json({ message: 'Failed to retrieve cars'})
  })
});


// GET BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
  .then(car => {
    res.json(car);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve car' });
  });
});



// POST
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


// PUT
router.put('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body
  
  db('cars').where({ id }).update(changes)
  .then(count => {
    if(count) {
      res.json({ updated: count })
    } else {
      res.status(404).json({ message: 'Invalid car id' })
    }
  }) 
   .catch( error => {
     res.status(500).json({ message: 'Failed to update data' })
   })
})


// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params

  // DELETE FROM Posts WHERE id = id
  db('cars').where({ id }).del()
  .then(count => {
    if(count) {
      res.json({ deleted: count })
    } else {
      res.status(404).json({ message: 'invalid car id' })
    }
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to delete car' })
  })
})


module.exports = router