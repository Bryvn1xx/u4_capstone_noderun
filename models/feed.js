'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feed.hasMany(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Feed.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Feed',
    tableName: 'feeds'
  });
  return Feed;
};