
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.string('role').notNullable()
  
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTableIfExists('users')
  };
  
  
