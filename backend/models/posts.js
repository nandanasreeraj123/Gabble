// 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {});

post.associate = function(models) {
  post.belongsTo(models.users,{as : 'users', foreignKey: 'userId'})
}

  return post;
};