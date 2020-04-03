
exports.up = function (knex) {
    return knex.schema.createTable('reports', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('location')
        table.string('comment')
        table.string('image')
        table.string('violation')
        table.string('date')
        table.integer('offender_id').references('offenders.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('reports')
};
