const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Friendship extends BaseModel {
  static get tableName() {
    return 'friendships'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      friend1: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'friendships.id',
        },
      },
      friend2: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'friendships.id',
        },
      },
    }
  }
}

module.exports = Friendship
