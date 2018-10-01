
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('rId');
        table.string('ing1');
        table.string('ing2');
        table.string('ing3');
        table.string('ing4');
        table.string('ing5');
        table.string('ing6');
        table.string('ing7');
        table.string('ing8');
        table.string('amt1');
        table.string('amt2');
        table.string('amt3');
        table.string('amt4');
        table.string('amt5');
        table.string('amt6');
        table.string('amt7');
        table.string('amt8');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};
