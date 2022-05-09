'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Feed, {
        foreignKey: 'feedId',
        as: 'post',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Post.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'postId',
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
    },
    feedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'feedId',
      onDelete: 'CASCADE',
      references: {
        model: 'feeds',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};