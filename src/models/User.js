const BaseModel = require('./BaseModel')
const { BelongsToManyRelation } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Post = require('./Post')
    const Comment = require('./Comment')
    return {
      posts: {
        relation: BelongsToManyRelation,
        modelClass: Post,
        join: {
          from: 'posts.id',
          to: 'users.id',
        },
      },
      comments: {
        relation: BelongsToManyRelation,
        modelClass: Comment,
        join: {
          from: 'comments.id',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = User
