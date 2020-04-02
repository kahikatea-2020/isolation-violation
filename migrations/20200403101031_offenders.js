// 
exports.up = function(knex) {
    return knex.schema.createTable('offenders', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('image')
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable('offenders')
};