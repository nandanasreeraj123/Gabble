//
'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('comments', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});

  comment.associate = function(models) {
    comment.belongsTo(models.posts,{as : 'posts', foreignKey: 'id'})
  }

  return comment;
};