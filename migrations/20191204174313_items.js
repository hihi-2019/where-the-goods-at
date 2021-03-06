
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('item_name')
    table.integer('user_id')
    table.integer('category_id')
    table.boolean('public')
    table.string('description')
    table.float('long')
    table.float('lat')
    table.string('suburb')
    table.integer('rating')
    table.string('comments')
    table.integer('season_id')
    table.integer('quantity')
    table.binary('image')
    table.string('address')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items')
};
