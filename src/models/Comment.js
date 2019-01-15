const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Comment extends BaseModel {
  static get tableName() {
    return 'comments'
  }

  static get relationMappings() {
    const Post = require('./Post')
    const User = require('./User')
    return {
      posts: {
        relation: BelongsToOneRelation,
        modelClass: Post,
        join: {
          from: 'posts.id',
          to: 'comments.id',
        },
      },
      users: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'comments.id',
        },
      },
    }
  }
}

module.exports = Comment
