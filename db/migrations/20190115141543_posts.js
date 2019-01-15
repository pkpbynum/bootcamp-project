exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.uuid('id').primary()
    table.text('content')
    table.integer('likes')
    table.datetime('time_posted')
    table.uuid('userId').references('users.id')
    table.uuid('ownerId').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.dropTable('posts')
}
