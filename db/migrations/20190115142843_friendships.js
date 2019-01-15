exports.up = function(knex, Promise) {
  return knex.schema.createTable('friendships', table => {
    table.uuid('id').primary()
    table.uuid('friend1').references('users.id')
    table.uuid('friend2').references('users.id')
    table.boolean('confirmed')
  })
}

exports.down = function(knex, Promise) {
  return knex.dropTable('friendships')
}
