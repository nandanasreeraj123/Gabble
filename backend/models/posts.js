// 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {});

post.associate = function(models) {
  post.belongsTo(models.users,{as : 'users', foreignKey: 'id'})
}

  return post;
};