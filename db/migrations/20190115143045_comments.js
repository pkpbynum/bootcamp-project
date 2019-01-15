exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.uuid('id')
    table.uuid('userId').references('users.id')
    table.uuid('postId').references('posts.id')
    table.dateTime('time_posted')
  })
}

exports.down = function(knex, Promise) {
  return knex.dropTable('comments')
}
