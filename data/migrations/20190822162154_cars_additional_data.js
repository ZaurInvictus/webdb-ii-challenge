// UP are the changes to make to the schema
exports.up = function(knex) {
  return knex.schema.table('cars', table => {
    table.string('transmission', 128)
    table.string('title ', 128)
  })
};


// DOWN how we undo changes in the up function
exports.down = function(knex) {
  return knex.schema.dropColumn('transmission', 'title')
};
