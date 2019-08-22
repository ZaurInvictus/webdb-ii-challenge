// UP are the changes to make to the schema
exports.up = function(knex) {
  return knex.schema.table('cars', table => {
    table.integer('VIN', 1024).unique()
    table.string('model', 128)
    table.integer('mileage', 1024)
  })
};


// DOWN how we undo changes in the up function
exports.down = function(knex) {
  return knex.schema.dropColumn('VIN', 'model', 'mileage')
};


 
