exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary()
    table.text('name')
    table.text('email').unique()
    table.text('password')
    table.date('birthday')
    table.text('concentration')
    table.text('hometown')
    table.enum('house', [
      'Freshman Dormitory',
      'Adams',
      'Eliot',
      'Mather',
      'Cabot',
      'Kirkland',
      'Pforzheimer',
      'Currier',
      'Leverett',
      'Quincy',
      'Dudley',
      'Lowell',
      'Winthrop',
      'Dunster',
    ])
    table.text('gender')
    table.text('bio')
    table.text('picture')
    table.text('hobbies')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
