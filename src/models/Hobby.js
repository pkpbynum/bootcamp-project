const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Post extends BaseModel {
  static get tableName() {
    return 'hobbies'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      posts: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'hobbies.userId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Post
