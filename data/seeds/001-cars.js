
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() // truncate() clears the table and resets the id while del() only clears the table
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Toyota' },
        { make: 'Nissan' },
        { make: 'Honda' }
      ]);
    });
};
