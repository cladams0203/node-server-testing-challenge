
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Chris', role: 'student'},
        {id: 2, name: 'Aaron', role: 'student'},
        {id: 3, name: 'Stella', role: 'student'}
      ]);
    });
};
