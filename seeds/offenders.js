
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('offenders').del()
    .then(function () {
      // Inserts seed entries
      return knex('offenders').insert([
        { id: 1, image: '', name: 'Don'},
        { id: 2, image: '', name: 'Lane',},
        { id: 3, image: '', name: 'JV'},
        { id: 4, image: '', name: 'Matt Uy'},
        { id: 5, image: '', name: 'Joseph'},
        { id: 6, image: '', name: 'Emily'},
        { id: 7, image: '', name: 'Bob Ross'},
      ]);
    });
};
