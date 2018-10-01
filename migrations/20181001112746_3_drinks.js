
exports.up = function(knex, Promise) {
    return knex.schema.createTable('drinks', (table) => {
        table.increments('dId');
        table.string('drinkName');
        table.integer('favorites');
        table.string('glassType');
        table.text('img');
        table.text('instructions');
        table.integer('postedBy').references('users.userId').onDelete('cascade');
        table.integer('recipeId').references('recipes.rId').onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('drinks');
};
