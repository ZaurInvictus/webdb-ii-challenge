
exports.seed = function(knex) {
  return knex('cars').truncate() // truncate() clears the table and resets the id while del() only clears the table
    .then(function () {
      return knex('cars').insert([
        { 
          VIN: 123,
          make: 'Toyota',  
          model: 'Camry',
          mileage: 10000
        },
        {   
          VIN: 1234,
          make: 'Nissan',  
          model: 'Maxima',
          mileage: 20000
        },
        {   
          VIN: 12345,
          make: 'Honda',  
          model: 'Civic',
          mileage: 30000
        },
      ]);
    });
};
