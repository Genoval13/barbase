
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('userId');
        table.string('email');
        table.specificType('password', 'char(60)').notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
