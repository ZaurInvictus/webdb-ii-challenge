// UP are the changes to make to the schema
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments()  // sets: primary key, called id, integer, autoincrements
    table.string('make', 128).unique().notNullable()
  })
};


// DOWN how we undo changes in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};

