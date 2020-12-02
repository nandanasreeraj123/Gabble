// 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});

post.associate = function(models) {
  post.belongsTo(models.user,{as : 'users', foreignKey: 'id'})
}

  return post;
};