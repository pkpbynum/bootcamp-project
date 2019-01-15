const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Post extends BaseModel {
  static get tableName() {
    return 'posts'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'posts.id',
        },
      },
    }
  }
}

module.exports = Post
