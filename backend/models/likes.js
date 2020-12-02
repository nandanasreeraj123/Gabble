// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class likes extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.user,{as : 'users', foreignKey: 'id'});
//     }
//   };
//   likes.init({
//     like: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'likes',
//   });
//   return likes;
// };
'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('likes', {
    like: DataTypes.BOOLEAN
  }, {});

  like.associate = function(models) {
    like.belongsTo(models.users,{as : 'users', foreignKey: 'id'})
    like.belongsTo(models.posts,{as : 'posts', foreignKey: 'id'})
  }

  return like;
};